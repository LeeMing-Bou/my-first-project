import axios from 'axios'
import { defineStore } from 'pinia'

const useRepositoryStore = defineStore('repository', {
    state: () => ({
        repositories: []
    }),
    actions: {
        async getAllRepositories() {
            try {
                // const { data } = await axios.get('https://api.github.com/users/tfd-ed/repos')
                const { data } = await axios.get('/v1/courses')
                console.log(data)
                this.repositories = data
            } catch (err) {
                console.log(err.message)
            }
        },

        testing(){
            console.log("testing getActions");
        }
    }
})

export default useRepositoryStore