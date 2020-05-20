<template lang = "html">
	<div class = "container">
		<div class = "row">
			<div class ="col text-left">
			<div>
				<h2>Listado de Talleres Motos/Carros Pereira</h2>
				<b-button size="sm" :to="{name: 'NewWorkShop'}" variant="primary">Nuevo Taller</b-button>
			</div>
			<br>
				<div class = "col-md-12">
					<b-table striped hover :items="workshops" :fields="fields">
						 <template slot="cell(action)" slot-scope="data">
							<b-button size="sm" variant="primary" :to="{name: 'EditWorkShop', params: {workshopId: data.item.id }}">Editar</b-button>

							<b-button size="sm" variant="danger" :to="{ name: 'DeleteWorkShop', params: {workshopId: data.item.id }}" >Eliminar</b-button>
							
						</template> 
						
					</b-table>
			
				</div>
				<div class="row text-center">
					<div class="col">
						<b-button size="sm" variant="success" :to="{name: 'ViewWorkShop'}">Ver Mapa</b-button>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>


<script>


import axios from "axios";
export default{
	data() {
		return {
			fields: [
				{key: "name", label: "Nombre"},
				{key: "description", label: "Descripción" },
				{key: "address", label: "Dirección" },
				{key: "action", label: ""}
			],
			workshops: []
		}
	},
	
	methods: {

		getWorkShops() {
			//consumo de la api
			const path = "http://localhost:8000/api/v1.0/workshops/"
			axios.get(path).then((response) =>{
				this.workshops = response.data
			})
			.catch((error) => {
				console.log(error)
			})
		}

	},
	//ejecutar el metodo getBooks
	created() {
		this.getWorkShops()
	} 

} 
</script> 

<style lang = "css" scoped>
</style> 