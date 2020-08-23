import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import StarRating from "react-native-star-rating";

class StarPuntuation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  render() {
    return (
      <StarRating
        starSize={30}
        disabled={false}
        emptyStar={"ios-star-outline"}
        fullStar={"ios-star"}
        halfStar={"ios-star-half"}
        iconSet={"Ionicons"}
        rating={this.state.starCount}
        selectedStar={rating => this.onStarRatingPress(rating)}
        fullStarColor={"gold"}
        emptyStarColor={"gold"}
      />
    );
  }
}

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image
        source={{ uri: item.photo }}
        style={{ width: 80, height: 80, borderRadius: 40 }}
      />
      <View style={{ alignItems: "flex-start", flex: 1, marginLeft: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{item.name}</Text>
        <Text>{item.position}</Text>
        <StarPuntuation />
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          justifyContent: "center",
          alignItems: "center"
        }}
        //onPress={() => this.props.navigation.navigate("Friends")}
      >
        <Text style={{ color: "green" }}>Details</Text>
      </TouchableOpacity>
    </View>
  );
}

export default class GastronomyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "La Burguesita",
          position: "Data Entry Clerk",
          photo:
            "https://www.restauracionnews.com/wp-content/uploads/2018/02/LaBurguesaPlato.jpg"
        },
        {
          name: "Youme sushi",
          position: "Sales Manager",
          photo:
            "https://www.hola.com/imagenes/cocina/noticiaslibros/20200618170413/sushi-cocina-japonesa-dia-mundial/0-837-524/dia-sushi-m.jpg"
        },
        {
          name: "Bellakos",
          position: "Sales Manager",
          photo:
            "https://www.bellakogastro.com/wp-content/uploads/2018/03/MG_0138.jpg"
        },
        {
          name: "Taco Bell",
          position: "Medical Assistant",
          photo:
            "https://www.diagonalmarcentre.es/wp-content/uploads/2019/05/diagonalmar-taco-bell-tienda.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    marginTop: 5
  },
  listItem: {
    margin: 5,
    padding: 10,
    backgroundColor: "#FFF",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5
  }
});
