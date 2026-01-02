import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import QuantityCounter from '../components/QuantityCounter';

export default function RedirectPage() {
  return (
    <>
    <StatusBar
            barStyle="dark-content"
        backgroundColor="#ff8c42" 
        transcluent={true}
          />
<ScrollView>
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={20} style={[styles.backArrow,{ marginTop: 10 }]} color="#ffffff" />
      </TouchableOpacity>

     

        <View>
        <View style={styles.originalView}>
                  <View><Image source={require('./images/congratulations.png')} style={styles.finalImage} /></View>
                      <Text style={{ fontSize: 30, fontWeight: '600', marginTop: 30 }}>Congratulations !!!</Text>
                      <Text style={{marginTop: 8, fontSize: 18, fontWeight: '400'}}>Your order have been taken and</Text> <Text style={{margin: 4, marginBottom: 30, fontSize: 18, fontWeight: '400'}}>is being attended to</Text>
              </View>
        <TouchableOpacity style={styles.trackButton} onPress={() => router.push('')}><Text style={{color: 'white', fontSize: 18}}>Track order</Text>
                                                        </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={() => router.replace('/(tabs)')}><Text style={styles.buttonText}>Continue shopping</Text>
                                                        </TouchableOpacity>
      </View>
      </View>
      </ScrollView></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginTop: 35,
    paddingTop: 15,
  },
  text: {
    fontSize: 24,
    marginTop: 30,
  },
  finalImage: {
    width: 200,
    height: 200,
    marginTop: 50,
    alignSelf: 'center',
    },
  originalView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: 'white',
    padding: 20,
    borderColor: '#FFA451',
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    alignSelf: 'center',
    width: '70%',
    marginTop: 40,
    marginBottom: 100,
  },
  buttonText: {
    color: '#FFA451',
    fontSize: 16,
    fontWeight: '600',
  },
  trackButton: {
    backgroundColor: '#FFA451',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center',
    marginHorizontal: '15%',
  },
  backArrow: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#696969',
    alignSelf: 'flex-start',
  },
});
