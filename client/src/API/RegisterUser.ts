export const RegisterUser = async(data) => {
    try {
        const response = await fetch('http://localhost:8000/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',       
            },
            body: JSON.stringify(data), 
        })
      const result = await response.json();
      console.log(result, 'result')
        
    } catch (error) {
        console.log('error in register user', error.message)
    }
}

