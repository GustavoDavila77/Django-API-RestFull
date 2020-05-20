<template lang="html">
	<div class="container">
		<div class="row">
			<div class="col">

				<h3> ¿Estás seguro de eliminar?</h3>
				<p>Nombre : {{ this.element.name }}</p>
				<p>Descripción : {{ this.element.description }}</p>
				<p>Dirección : {{ this.element.address }}</p>
		
			</div>
		</div>
		<div class="row">
			<div class="col">
				<b-button v-on:click="deleteWorkShop" variant="danger">Eliminar</b-button>
			</div>		
	</div>
	</div>

	
	
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
	data () {
		return {
			workshopId: this.$route.params.workshopId,
			element: {
				name: '',
				description: '',
				address: ''
			}
		}
	},
	methods: {
			getWorkShop(){
			const path = `http://localhost:8000/api/v1.0/workshops/${this.workshopId}/`

			axios.get(path).then((response) => {


				this.element.name = response.data.name
				this.element.description = response.data.description
				this.element.address = response.data.address
			})
			.catch((error) => {
				console.log(error)
			})
		},
		deleteWorkShop () {
			const path = `http://localhost:8000/api/v1.0/workshops/${this.workshopId}/`

			axios.delete(path).then((response) =>{
				location.href = '/workshops'
			})
			.catch((error) => {
				swal("No es posible eliminar el Taller" ,"", "error")
			})

		}
	},
	created() {
		this.getWorkShop()
	}
}
</script>

<style lang="css" scoped>
</style>
