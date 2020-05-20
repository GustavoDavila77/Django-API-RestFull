<template lang="html">
	<div class="container">
		<div class="row">
			<div class="col text-left">
				<h2>Editar Talleres</h2>
			</div>
		</div>

		<div class="row">
			<div class="col">
				<div class="card">
					<div class="card-body">
						<form @submit="onSubmit">
							<div class="form-group row">
								<label for="title" class="col-sm-2 col-form-label">Nombre</label>
								<div class="col-sm-6">
									<input type="text" placeholder="Nombre" name="name" class="form-control" v-model.trim="form.name">
								</div>
							</div>

							<div class="form-group row">
								<label for="description" class="col-sm-2 col-form-label">Descripción</label>
								<div class="col-sm-6">
									<textarea name="description" class="form-control" placeholder="Descripción" rows="3" v-model.trim="form.description" ></textarea>
								</div>
							</div>

							<div class="form-group row">
								<label for="title" class="col-sm-2 col-form-label">Dirección</label>
								<div class="col-sm-6">
									<input type="text" placeholder="Dirección" name="address" class="form-control" v-model.trim="form.address">
								</div>
							</div>
							
							<div class="rows">
								<div class="col text-left">
									<b-button type="submit" variant="primary">
										Editar
									</b-button>
									<b-button type="submit" class="btn-large-space" :to="{ name: 'ListWorkShop'}">
										Cancelar
									</b-button>
									
								</div>
								
							</div>
						</form>
						
					</div>
					
				</div>
				
			</div>
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
				name: '',
				description: '',
				address: ''
			}
		}
	},
	methods: {
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


		},

		getWorkShop(){
			const path = `http://localhost:8000/api/v1.0/workshops/${this.workshopId}/`

			axios.get(path).then((response) => {

				//lo pinta por pantalla el libro que se obtuvo
				this.form.name = response.data.name
				this.form.description = response.data.description
				this.form.address = response.data.address
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