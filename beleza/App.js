import { StatusBar } from 'expo-status-bar';
import { queryClient } from './src/libs/reactQuery/index';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from 'react-query';
import Routes from './src/navegation/routes';

export default function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <PaperProvider>
        <NavigationContainer>
          <Routes />
          <StatusBar style="auto" />
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}

