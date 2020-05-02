<template>
    <v-card width="600px" class="mt-5 mx-auto">
        <v-alert :type="typeAlert" dense text dismissible v-model="showAlert">
            {{message}}
        </v-alert> 
        <v-form>
            <v-file-input  v-model="fileuploaded" label="File input"></v-file-input>
            <v-btn color="success" @click="uploadFile()">Send</v-btn>
        </v-form>
    </v-card>
</template>

<script>

export default {
    data() {
        return {
            fileuploaded: null,
            showAlert: false,
            message: '',
            typeAlert: 'success'   
        }
    },
    methods: {
        uploadFile(){
            if (!this.fileuploaded){
                    message(this, true, 'Select a file', 'info')
                    return
            }

            let formData = new FormData()
            //this parameter must match the one used by multer in the backend
            formData.append('fileuploaded', this.fileuploaded)
            this.$http.post('http://localhost:3001/endpoint', formData).
                then((response) => {
                    console.log(response)
                    message(this, true, response.body.message, 'success')
                }).catch(error => message(this, true, error, 'error'))
        }
    },
}

function message(owner, show, text, type){
    owner.showAlert =  show
    owner.message = text
    owner.typeAlert= type   
}
</script>