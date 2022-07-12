<script>
	import InputEmail from '$lib/components/input-email.svelte';
	import InputPassword from '$lib/components/input-password.svelte';

	let fields = {
		email: '',
		password: ''
	};
	let errors = {
		email: '',
		password: ''
	};

	let valid = false;
	function handleSubmit() {
		valid = true;

		// Validaciones
		if (fields.password.trim().length < 6) {
			errors.password = 'El Password debe tener como minimo 6 caracteres.';
			valid = false;
		} else {
			errors.password = '';
		}

		if (valid) {
			console.log('Valid', fields);
		}
	}
</script>

<div class="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-6">
	<figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
	<div class="card-body">
		<h2 class="card-title">Login</h2>
		<p>Bienvenido al Sistema !!!</p>
		<form on:submit|preventDefault={handleSubmit}>
			<InputEmail label={'Mail'} bind:value={fields.email} error={errors.email} />
			<InputPassword label={'Password'} bind:value={fields.password} error={errors.password} />

			<input type="submit" value="Login" class="btn btn-primary my-4" />
		</form>
	</div>
</div>
