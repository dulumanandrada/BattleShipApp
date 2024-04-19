
import AsyncStorage from "@react-native-async-storage/async-storage";
// const baseUrl="https://malamute-enabled-yak.ngrok-free.app"
const baseUrl = "http://163.172.177.98:8081"
const baseHeaders = {
    "Content-Type": 'application/json',
    "Accept": 'application/json'
}

export const login = async (email: string, password: string): Promise<string> => {
  // Andrada
  // andrada
  const result = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
          ...baseHeaders
      },
      body: JSON.stringify({
          email: email, 
          password: password
      })
  })
  const data = await result.json()
  await AsyncStorage.setItem('token', data.accessToken)
  return data.accessToken
}

export const register = async (email: string, password: string) => {
  console.log('email', email);
  console.log('pass', password);
  const result = await fetch(`${baseUrl}/auth/register`, {
      method: 'POST',
      headers: {
          ...baseHeaders
      },
      body: JSON.stringify({
          email: email, 
          password: password
      })
  })
  const data = await result.json()
  return data.id
}

export const fetchUserDetails = async (): Promise<any> => {
  const token = await AsyncStorage.getItem('token');
  if (!token) {
    throw new Error('Authentication token not found');
  }
  try {
    console.log('asta e token', token);
    
    const response = await fetch(`${baseUrl}/user/details/me`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      }
    });
    const data = await response.json();
    return data
  } catch (error:any) {
    throw new Error('Error fetching user details: ' + error.message);
  }
}

export const listGames = async (token: string) => {
  const result = await fetch(`${baseUrl}/game`, {
      method: 'GET',
      headers: {
          ...baseHeaders,
          'Authorization': `Bearer ${token}`
      }
  })
  const data = await result.json();
  return data
}

export const createGame = async (token: string) => {
  const result = await fetch(`${baseUrl}/game`, {
      method: 'POST',
      headers: {
          ...baseHeaders,
          'Authorization': `Bearer ${token}`
      }
  })
  const data = await result.json();
  console.log("CREATED THE GAME: "+ data.id+ " "+ data.status)
  return data
}

export const loadGame = async (token: string, gameId: number) => {
  const result = await fetch(`${baseUrl}/game/${gameId}`, {
      method: 'GET',
      headers: {
          ...baseHeaders,
          'Authorization': `Bearer ${token}`
      }
  })
  const data = await result.json();
  return data
}