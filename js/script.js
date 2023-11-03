const { createApp } = Vue;


createApp({
  data(){

    return {
      address: "",
      addressList: [],
      myUrl: "https://flynn.boolean.careers/exercises/api/random/mail"
    }
  },

  mounted(){

    for (let index = 0; index < 10; index++) {
      axios.get(this.myUrl)
    . then((result)=> {
      this.address = result.data.response
      this.addressList.push(this.address)
      console.log(this.addressList)
    })

    }
    
  
  },

  



}).mount("#app")