import { useState } from "react";
import Header from "../../Header";
import Work from "../../Work";
import { styles } from "./styles";

import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export const Home = () => {
  const [tasks, setTasks] = useState<
    { id: number; text: string; completed: boolean }[]
  >([]);
  const [newTask, setNewTask] = useState("");
  const [taskId, setTaskId] = useState(0);

  

  const handleTaskCreate = () => {
    if (!newTask || newTask.trim() === "") {
      return Alert.alert("Você precisa informar uma tarefa");
    }

    setTasks((prevState) => [
      ...prevState,
      { id: taskId, text: newTask, completed: false },
    ]);
    setNewTask("");
    setTaskId(taskId + 1);

    console.log(tasks);
  };

  const handleTaskToggle = (id: number) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setNewTask}
          value={newTask}
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskCreate}>
          <Image
            source={require("../../../../assets/plus.png")}
            style={styles.textButton}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.progres}>
        <View style={styles.count}>
          <Text style={styles.progresCreate}>Criadas</Text>
          <Text style={styles.countView}>{tasks.length}</Text>
        </View>
        <View style={styles.count}>
          <Text style={styles.progresCheck}>Concluidas</Text>
          <Text style={styles.countView}>
            {tasks.filter((task) => task).length}
          </Text>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Work 
            key={item.id} 
            task={item.text} 
            isActive={item.completed}
            onRemove={() => ({})} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.noTask}>
            <Text style={styles.row}></Text>
            <Image
              style={styles.noTaskImage}
              source={require("../../../../assets/Clipboard.png")}
            />
            <Text style={styles.noTaskBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.noTaskRegular}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
};
