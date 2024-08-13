const app = Vue.createApp({
  data() {
    return {
      firstName: 'Akbar',
      lastName: 'khan',
      email: 'akbar@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    }
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      let { results } = await res.json()
	result = results[0]
	const { name , email, gender, picture} = result;
     

      this.firstName = name.first
      this.lastName = name.last
      this.email = email
      this.gender = gender
      this.picture = picture.large
    },
  },
})

app.mount('#app')

