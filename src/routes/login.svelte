<script>
	import InputEmail from '$lib/components/base/input-email.svelte';
	import InputPassword from '$lib/components/base/input-password.svelte';
	import { getUserValid } from '$lib/services/user';

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
		if (fields.email.trim().length < 1) {
			errors.email = 'El Mail NO puede estar vacio.';
			valid = false;
		} else {
			errors.email = '';
		}
		if (fields.password.trim().length < 6) {
			errors.password = 'El Password debe tener como minimo 6 caracteres.';
			valid = false;
		} else {
			errors.password = '';
		}

		if (valid) {
			console.log('Valid', fields);
			console.log(getUserValid(fields.email, fields.password));
		}
	}
</script>

<div class="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-6">
	<img class="block mx-auto w-36 h-36" src={'login.png'} alt={'Login'} />
	<div class="card-body">
		<h2 class="card-title text-4xl">Login</h2>
		<p class="text-2xl font-semibold">Bienvenido a Arpack Web !!!</p>
		<form on:submit|preventDefault={handleSubmit}>
			<InputEmail label={'Mail'} bind:value={fields.email} error={errors.email} />
			<InputPassword label={'Password'} bind:value={fields.password} error={errors.password} />

			<input type="submit" value="Login" class="btn btn-primary my-4" />
		</form>
	</div>
</div>
