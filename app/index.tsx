import { useState } from "react";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Index() {
  type Details = {
    logradouro: string,
    bairro: string,
    localidade: string,
    uf: string
  }

  const [cep, setCep] = useState<string>('')
  const [details, setDetails] = useState<Details>({})

  function buscarCep(){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    .then(data => setDetails(data))
  }

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
      }}
    >
      <Text
        style={{fontSize: 24, marginBottom: 12}}
      >
        Consulte seu CEP!
      </Text>
      <TextInput
        value={cep}
        onChange={(e) => {setCep(e.target.value)}}
        style={{backgroundColor: 'white', height:30, width: '100%', marginBottom: 12}}
      />
      <Button
       title="Buscar"
       onPress={buscarCep}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 16,
          borderRadius: 8,
          padding: 8,
          width: '100%',
          backgroundColor: 'white'
        }}
      >
        <Text
          style={{fontSize: 20, textAlign: 'center', marginBottom: 4}}
        >{details.logradouro}, {details.bairro}</Text>
        <Text
        style={{fontSize: 20, textAlign: 'center', marginBottom: 4}}
        >{details.localidade}, {details.uf}</Text>
      </View>
    </View>
  );
}
