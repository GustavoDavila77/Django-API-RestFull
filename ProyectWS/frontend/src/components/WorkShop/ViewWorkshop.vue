<template lang="html">
	<div class="container">
		<div class="row">
			<div class="col">
				<h3> Mapa</h3>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7951.5103290653215!2d-75.70964894116628!3d4.812049789433688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTalleres%20pereira!5e0!3m2!1ses!2sco!4v1590016835269!5m2!1ses!2sco" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
			</div>
		</div>
		<div class="row">
			<b-button type="submit" class="btn-large-space" :to="{ name: 'ListWorkShop'}">
				Cancelar 
			</b-button>	
		</div>
	</div>

	
	
</template>

<script>

import axios from 'axios'
import swal from 'sweetalert'

export default{
	data() {
		return {
			// se obtiene el id del libro
			workshopId: this.$route.params.workshopId,
			form: {
				urlmap: ''
			}
		}
	},
	
	methods: {
		/*
		onSubmit(evt){
			evt.preventDefault()
			
			//se hace el consumo de la api para obtener el id
			const path = `http://localhost:8000/api/v1.0/workshops/${this.workshopId}/`

			axios.put(path, this.form).then((response) => {


				this.form.name = response.data.name
				this.form.description = response.data.description
				this.form.address = response.data.address
				

				
				swal("Taller actualizado exitosamente!!!", "", "success")
			})
			.catch((error) => {
				console.log(error)
			})


		}, */

		getWorkShop(){
			const path = `http://localhost:8000/api/v1.0/workshops/${this.workshopId}/`

			axios.get(path).then((response) => {

				//lo pinta por pantalla el libro que se obtuvo
				this.form.urlmap = response.data.mapa
			})
			.catch((error) => {
				console.log(error)
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
