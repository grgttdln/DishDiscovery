import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import bookmarkStyles from "../styles/BookmarkStyles";
import { useGlobalState } from "./GlobalStateProvider";
import getSavedDish from "../services/savedDish";

const Bookmark = ({ route }) => {
  const navigation = useNavigation();

  const { bkItems, removeBookmark } = useGlobalState();
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const fetchBookmark = async () => {
    setLoading(true);
    const tempInfo = {};
    try {
      const data = await Promise.all(bkItems.map((item) => getSavedDish(item)));
      bkItems.forEach((item, index) => {
        tempInfo[item] = data[index];
      });
      setInfo(tempInfo);
    } catch (error) {
      console.error("Failed to fetch additional info:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookmark();
  }, [bkItems]);

  return (
    <SafeAreaView style={bookmarkStyles.container}>
      <View style={bookmarkStyles.mainHandler}>
        <TouchableOpacity onPress={handleBack}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text style={bookmarkStyles.title}>Bookmark</Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <FlatList
              data={bkItems}
              renderItem={({ item }) => (
                <View style={bookmarkStyles.itemContainer}>
                  {info[item] && info[item].length > 0 && (
                    <View style={bookmarkStyles.itemContent}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("Menu", {
                            mealID: info[item][0].idMeal,
                          })
                        }
                      >
                        <Image
                          source={{ uri: info[item][0].strMealThumb }}
                          style={bookmarkStyles.imgItem}
                        />
                      </TouchableOpacity>
                      <View style={bookmarkStyles.itemInfo}>
                        <Text
                          style={bookmarkStyles.dishTitle}
                        >{`${info[item][0].strMeal}`}</Text>
                        <Text
                          style={bookmarkStyles.category}
                        >{`${info[item][0].strCategory}`}</Text>
                      </View>

                      <TouchableOpacity
                        onPress={() => removeBookmark(info[item][0].idMeal)}
                        style={bookmarkStyles.itemRemove}
                      >
                        <Text style={bookmarkStyles.minusIcon}>➖</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              )}
              keyExtractor={(item) => item}
            />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Bookmark;
