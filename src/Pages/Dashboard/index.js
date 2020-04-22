import React, {useState, useEffect} from 'react'
import { Background, ViewSaldo, Saldo, SaldoTitle, Registros, RegistroTitle, IconRight, List  } from './styles'
import firebase from '../../Services/firebase'
import HistoricoList from '../../Components/HistoricoList'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Dashboard({navigation}) {
  const [saldo, setSaldo] = useState(0)
  const [historico, setHistorico] = useState([])
  
 const uid = firebase.auth().currentUser.uid
 
  useEffect(()=>{

    async function loadingList(){
     await firebase.database().ref('users').child(uid).on('value', (s) => {

        setSaldo(s.val().saldo)

      })
      await firebase.database().ref('historico').child(uid)
        .orderByChild('date').equalTo(new Date().toLocaleDateString())
        .limitToFirst(5).on('value', (s) => {
          setHistorico([])
          s.forEach((item) => {
            let list = {
               key: item.key,
               tipo: item.val().tipo,
               valor: item.val().valor
            }
            setHistorico(oldArray => [...oldArray, list].reverse())
          })
        })
    }
    loadingList()
  },[])

  return (
    
    <Background>
      
      <ViewSaldo>
        <SaldoTitle>Saldo atual.</SaldoTitle>
        <Saldo>$ {saldo}</Saldo>
      </ViewSaldo>

      <Registros>
        <RegistroTitle> Registros do dia.</RegistroTitle>
        <IconRight>
          <Icon name='chevron-right' size={30} color='#fff' />
        </IconRight>
      </Registros>
      <List
        keyExtractor={item => item.key}
        data={historico}
        renderItem={({item})=> <HistoricoList data={item}/>}
      />  
    </Background>
  )
}
