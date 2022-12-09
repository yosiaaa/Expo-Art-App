import {
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import Axios from "axios";

const Item = ({ name, email, bidang, onPress, onDelete }) => {
  return (
    <View style={{ flexDirection: "row", marginBottom: 20 }}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{ uri: "https://api.multiavatar.com/BinxBond.png" }}
          style={{ width: 70, height: 70, borderRadius: 100 }}
        />
      </TouchableOpacity>
      <View style={{ marginLeft: 20, flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{name}</Text>
        <Text style={{ fontSize: 16 }}>{email}</Text>
        <Text style={{ fontSize: 16 }}>{bidang}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={{ color: "red", fontSize: 20, fontWeight: "bold" }}>
          X
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const AddEntry = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bidang, setBidang] = useState("");
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState("Simpan");
  const [selectedUser, setSelectedUser] = useState({});

  // useEffect fungsinya untuk memuncul data mana yang akan tampil
  // pada saat aplikasi / page pertama kali dibuka

  useEffect(() => {
    getData();
  }, []);

  // METHOD POST DATA
  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };
    if (button === "Simpan") {
      Axios.post("http://192.168.18.12:3000/users", data).then((res) => {
        console.log("res: ", res);
        setName("");
        setEmail("");
        setBidang("");
        // function getData dipanggil lagi untuk menampilkan/menarik data yang telah di post
        // di sebelumnya...
        getData();
      });
    } else if (button === "Update") {
      Axios.put(
        `http://192.168.18.12:3000/users/${selectedUser.id}`,
        data
      ).then((res) => {
        console.log("res update: ", res);
        setName("");
        setEmail("");
        setBidang("");
        getData();
        setButton("Simpan");
      });
    }
  };

  // METHOD GET DATA
  const getData = () => {
    Axios.get("http://192.168.18.12:3000/users").then((res) => {
      console.log("res data: ", res);
      setUsers(res.data);
    });
  };

  const selectItem = (item) => {
    console.log("selected item", item);
    setSelectedUser(item);
    // ini function pada saat item yang di pilih/select
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton("Update");
  };

  const deleteItem = (item) => {
    console.log("delete item: ", item);
    Axios.delete(`http://192.168.18.12:3000/users/${item.id}`).then((res) => {
      console.log("res delete: ", res);
      getData();
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Call Api JSON-SERVER</Text>
      <TextInput
        placeholder="name"
        value={name}
        onChangeText={(value) => setName(value)}
        style={{
          marginBottom: 12,
          borderRadius: 100,
          marginVertical: 10,
          borderWidth: 1,
          padding: 5,
        }}
      />
      <TextInput
        placeholder="email"
        value={email}
        onChangeText={(value) => setEmail(value)}
        style={{
          marginBottom: 12,
          borderRadius: 100,
          marginVertical: 10,
          borderWidth: 1,
          padding: 5,
        }}
      />
      <TextInput
        placeholder="bidang"
        value={bidang}
        onChangeText={(value) => setBidang(value)}
        style={{
          marginBottom: 12,
          borderRadius: 100,
          marginVertical: 10,
          borderWidth: 1,
          padding: 5,
        }}
      />
      <Button title={button} onPress={submit} />
      <View
        style={{
          height: 2,
          marginVertical: 10,
          backgroundColor: "black",
          borderWidth: 1,
        }}
      />
      {users.map((user) => {
        return (
          <Item
            key={user.id}
            name={user.name}
            email={user.email}
            bidang={user.bidang}
            onPress={() => selectItem(user)}
            onDelete={() =>
              Alert.alert(
                "Warning!", "Anda yakin akan menghapus user ini ?", 
              [
                { 
                  text: "Tidak", 
                  onPress: () => console.log("button tidak") 
                },
                { 
                  text: 'Ya', 
                  onPress: () => deleteItem(user)
                }
              ])
            }
          />
        );
      })}
    </View>
  );
};

export default AddEntry;
