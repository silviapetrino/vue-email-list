const { createApp } = Vue;


createApp({
  data(){

    return {
      address: "",
      myUrl: "https://flynn.boolean.careers/exercises/api/random/mail"
    }
  },

  mounted(){
    axios.get(this.myUrl)
    .then((result) => {
      this.address = result.data.response
      console.log(this.address)
    })
  },


  method: {
  
  }



}).mount("#app")