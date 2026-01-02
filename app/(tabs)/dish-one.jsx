import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import QuantityCounter from '../components/QuantityCounter';

export default function DishOne() {
  return (
      <ScrollView>
        <View style={styles.container}>
                  <View style={styles.originalView}>
      <View style={styles.card}>

              <TouchableOpacity onPress={() => router.back()} style={styles.backArrow}>
                <Ionicons name="arrow-back" size={20} color="#fff" />
              </TouchableOpacity>
              <Image source={require('./images/lime-honey.jpg')} style={styles.finalImage} />
      </View>

                <View style={styles.priceDesc}>
                          <Text style={{ fontSize: 18, fontWeight: '600' }}>Honey Lime Combo</Text>
                          <Text style={{ fontSize: 18, fontWeight: '600' }}>Price ₹ 199</Text>
                </View>
                  <Text style={styles.description}>Honey and lime create a perfect harmony, blending smooth sweetness with lively tang. This refreshing combo elevates fruits, drinks, marinades, and desserts, adding brightness, balance, and a zesty tropical touch that feels natural, energizing, and irresistibly delicious for summer moments.</Text>
                  </View>
        <View>
                  <View style={styles.bottomContent}><QuantityCounter price={199} /></View>
                  <TouchableOpacity style={styles.button} onPress={() => router.push('/redirectPage')}><Text style={styles.buttonText}>Place Order</Text>
                  </TouchableOpacity>
      
       <View style={styles.extraContent}>
        <Text style={styles.extraTitle}>Why you’ll love this combo</Text>

        <Text style={styles.extraText}>
          • Boosts immunity with natural vitamin C
        </Text>
        <Text style={styles.extraText}>
          • Refreshing and hydrating summer choice
        </Text>
        <Text style={styles.extraText}>
          • No artificial flavors or preservatives
        </Text>

        <Text style={styles.extraTitle}>Ingredients</Text>
        <Text style={styles.extraText}>
          Fresh lime, organic honey, seasonal fruits
        </Text>

        <Text style={styles.extraTitle}>Nutritional Info</Text>
        <Text style={styles.extraText}>
          Calories: 180 kcal per serving
        </Text>
        <Text style={styles.extraText}>
          Sugar: Natural fruit sugar only
        </Text>
      </View>
        </View>

      <View>
        <Text style={styles.extraTitle}>Customer Reviews :
        </Text>
        <Text style={{fontSize: 17,alignSelf: 'center', color: '#555'}}>⭐️⭐️⭐️⭐️⭐️ - Very refreshing!</Text>
        <Text style={{fontSize: 17,alignSelf: 'center', color: '#555'}}>⭐️⭐️⭐️⭐️ - Perfect summer</Text>
        <Text style={{fontSize: 17,alignSelf: 'center', marginBottom: 30, color: '#555'}}>⭐️⭐️⭐️ - Loved the taste</Text>
      </View>

      </View>
    </ScrollView>
      );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f0fff0',
    marginTop: 35,
  },
  text: {
    fontSize: 24,
    marginTop: 30,
  },
  finalImage: {
    width: 375,
    height: 280,
    left: -35,
  },
  originalView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#228b22',
    padding: 7,
    borderRadius: 10,
    alignItems: 'center',
    width: '50%',
    alignSelf: 'flex-end',
    top: -84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  card: {
    width: '100%',
    alignSelf: 'center',
  },
  description: {
    padding: 15,
    marginTop: 20,
    fontSize: 16,
    color: '#555',
    borderRadius: 10,
    letterSpacing: 1,
    textAlign: 'justify',
    fontWeight: '400',
    borderWidth: 2,
    borderColor: '#f08080',
  },
  priceDesc: {
    display: 'flex',
    flexDirection: 'row',
    gap: 60,
    backgroundColor: '#ffe4c4',
    height: 70,
    width: '120%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContent: {
    flexDirection: 'row',
    marginTop: 10,
  },
  backArrow: {
    position: 'absolute',
    top: 20,
    zIndex: 1, 
    backgroundColor: '#696969',
    padding: 5,
    borderRadius: 10,
  },
   extraContent: {
    marginTop: 0,
    paddingBottom: 20,
  },
  extraTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    color: '#2f4f4f',
  },
  extraText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
});
