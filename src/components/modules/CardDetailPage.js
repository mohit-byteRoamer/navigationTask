import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const CardDetailPage = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>DeftSoft</Text>
        <Text style={styles.description}>
          Overview Live Deftsoft Informatics Pvt. Ltd. is a 100% export oriented
          unit (EOU), which aims at escalating and promoting the software
          exports from India. We are registered with the Software Technology
          Parks of India (STPI), a premium society set up by the Ministry of
          Communication and Information Technology, Government of India. We
          strictly comply with STPI rules and corporate governance norms, and
          abide to applicable laws and regulations, to deliver best quality. Our
          Vision We, at Live Deftsoft Informatics, always strive to improve
          ourselves through our strong commitment towards work. Keeping
          transparency in communications with stakeholders, and endorsing
          open-mindedness along with creativity, we encourage healthier work
          culture, for better learning and growth of our employees. Following a
          methodological approach, we always suggest our clients the most
          appropriate services, for an optimized business development. Our
          Mission We aim at delivering you: • Quality Services • Innovative and
          effective Solutions • Strong & Clear Communication • Responsible,
          Committed and Reliable Services What we Offer? We are consistently
          providing unerring and holistic software solutions to a wide range of
          clients. • Professional Web development and designing services •
          Strategically defined Internet Marketing services • Innovative mobile
          application development and designing services Our Specialties We have
          up-to-date and thorough knowledge of • Open Source Technologies •
          Microsoft Technologies • Mobile Technologies • Internet Marketing
          Achievements & Awards • Registered with Software Technology Parks of
          India • Certified Google Partner • Bing Accredited Professional
          Company • Nominated for Best HR Practices in 2010 • Served more than
          1000 Clients from Around the Globe • Rated as One of the Top IT
          Solution Provider
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 20,
    marginVertical: 20,
    marginBottom: 16,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default CardDetailPage;
