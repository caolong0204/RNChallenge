import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Button,
} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import notifee, {
  AndroidBadgeIconType,
  AndroidImportance,
  AndroidVisibility,
} from '@notifee/react-native';
interface BadgeNotificationProps {}

const BadgeNotification = (props: BadgeNotificationProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onDisplayNotification = async () => {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      badge: true,
      importance: AndroidImportance.HIGH,
      visibility: AndroidVisibility.PUBLIC,
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Display a notification using notifee',
      android: {
        channelId,
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
        badgeIconType: AndroidBadgeIconType.SMALL,
        importance: AndroidImportance.HIGH,
        visibility: AndroidVisibility.PUBLIC,
      },
    });
  };

  const setBadgeCount = () => {
    // Set badge count
    notifee.setBadgeCount(53).then(() => console.log('Badge count set'));
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View>
            <Text style={styles.highlight}>Display a notification</Text>
            <Button
              title="Display Notification"
              onPress={onDisplayNotification}
            />
          </View>
          <View>
            <Text style={styles.highlight}>Set badge count</Text>
            <Button title="Set badge count" onPress={setBadgeCount} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BadgeNotification;

const styles = StyleSheet.create({
  container: {},
  highlight: {color: 'red'},
});
