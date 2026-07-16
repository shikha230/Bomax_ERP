<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import DemoModal from '$lib/components/features/DemoModal.svelte';
	import ContactModal from '$lib/components/features/ContactModal.svelte';

	import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Building2 } from 'lucide-svelte';

	let isDemoModalOpen = $state(false);
	let isContactModalOpen = $state(false);

	let formSubmitted = $state(false);
	let formData = $state({
		name: '',
		email: '',
		phone: '',
		company: '',
		state: '',
		city: '',
		message: ''
	});

	// State -> City map (suggestions only — city field allows free/manual entry too)
	const stateCityMap: Record<string, string[]> = {
		'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Tirupati'],
		'Arunachal Pradesh': ['Itanagar', 'Naharlagun'],
		'Assam': ['Guwahati', 'Dibrugarh', 'Silchar', 'Jorhat'],
		'Bihar': ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur'],
		'Chhattisgarh': ['Raipur', 'Bhilai', 'Bilaspur', 'Durg'],
		'Goa': ['Panaji', 'Margao', 'Vasco da Gama'],
		'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'],
		'Haryana': ['Gurugram', 'Faridabad', 'Panipat', 'Ambala'],
		'Himachal Pradesh': ['Shimla', 'Manali', 'Dharamshala'],
		'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro'],
		'Karnataka': ['Bengaluru', 'Mysuru', 'Mangaluru', 'Hubballi'],
		'Kerala': ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur'],
		'Madhya Pradesh': ['Indore', 'Bhopal', 'Gwalior', 'Jabalpur'],
		'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
		'Manipur': ['Imphal'],
		'Meghalaya': ['Shillong'],
		'Mizoram': ['Aizawl'],
		'Nagaland': ['Kohima', 'Dimapur'],
		'Odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela'],
		'Punjab': ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala'],
		'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota'],
		'Sikkim': ['Gangtok'],
		'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli'],
		'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad'],
		'Tripura': ['Agartala'],
		'Uttar Pradesh': ['Lucknow', 'Noida', 'Kanpur', 'Ghaziabad', 'Varanasi'],
		'Uttarakhand': ['Dehradun', 'Haridwar', 'Haldwani'],
		'West Bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Siliguri'],
		'Andaman and Nicobar Islands': ['Port Blair'],
		'Chandigarh': ['Chandigarh'],
		'Dadra and Nagar Haveli and Daman and Diu': ['Daman', 'Silvassa'],
		'Delhi': ['New Delhi'],
		'Jammu and Kashmir': ['Srinagar', 'Jammu'],
		'Ladakh': ['Leh', 'Kargil'],
		'Lakshadweep': ['Kavaratti'],
		'Puducherry': ['Puducherry']
	};

	let availableCities = $derived(formData.state ? (stateCityMap[formData.state] ?? []) : []);

	function handleStateChange() {
		formData.city = '';
	}

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		// In a real application, submit to backend
		formSubmitted = true;
		setTimeout(() => {
			formSubmitted = false;
			formData = { name: '', email: '', phone: '', company: '', state: '', city: '', message: '' };
		}, 8000);
	}
</script>

<svelte:head>
	<title>Contact Bomax ERP Support & Sales Teams</title>
	<meta name="description" content="Get in touch with Bomax ERP corporate headquarters or support teams. Ask questions, request custom integrations, or book live product walkthroughs." />
	<link rel="canonical" href="https://bomax-erp-vercel-app.vercel.app/contact" />
</svelte:head>

<Header />

<main class="min-h-screen bg-slate-50/40 selection:bg-blue-500 selection:text-white relative overflow-hidden">
	<!-- Background glow effects -->
	<div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
		<div class="absolute -top-40 -left-40 h-150 w-150 rounded-full bg-linear-to-tr from-cyan-400/20 to-blue-300/10 blur-3xl opacity-60"></div>
		<div class="absolute top-1/4 right-0 h-175 w-175 rounded-full bg-linear-to-br from-indigo-300/15 to-blue-400/25 blur-3xl opacity-50"></div>
	</div>

	<!-- Contact Hero Header -->
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-6 text-center">
		
		<h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight mb-5 max-w-4xl mx-auto">
			Start a Conversation with Us
		</h1>
		<p class="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
			Whether you need a specialized database migration, custom machinery integrations, or just want to speak with sales, we are ready to assist.
		</p>
	</div>

	<!-- Split Columns Directory -->
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
			
			<!-- Left Column: Details -->
			<div class="lg:col-span-5 space-y-8">
				<div class="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
					<h3 class="text-2xl font-extrabold text-slate-950 font-heading">Direct Contact</h3>
					<p class="text-sm text-slate-500">Reach out at any time. Our customer response teams typically get back to requests within 4 business hours.</p>
					
					<hr class="border-slate-100" />

					<div class="space-y-5">
						<!-- Phone -->
						<div class="flex items-start gap-4">
							<div class="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
								<Phone class="h-5 w-5" />
							</div>
							<div>
								<div class="text-xs font-bold uppercase text-slate-400">Phone Support</div>
								<a href="tel:+919353080886" class="text-sm font-semibold text-slate-900 hover:text-blue-600 transition">+91 93530 80886</a>
							</div>
						</div>

						<!-- Email -->
						<div class="flex items-start gap-4">
							<div class="h-10 w-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
								<Mail class="h-5 w-5" />
							</div>
							<div>
								<div class="text-xs font-bold uppercase text-slate-400">Email Support</div>
								<a href="mailto:hostbomax@gmail.com" class="text-sm font-semibold text-slate-900 hover:text-blue-600 transition">hostbomax@gmail.com</a>
							</div>
						</div>

						<!-- Hours -->
						<div class="flex items-start gap-4">
							<div class="h-10 w-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
								<Clock class="h-5 w-5" />
							</div>
							<div>
								<div class="text-xs font-bold uppercase text-slate-400">Operating Hours</div>
								<span class="text-sm font-medium text-slate-700">Mon - Sat: 9:00 AM - 6:00 PM IST</span>
							</div>
						</div>

						<!-- Head Office -->
						<div class="flex items-start gap-4">
							<div class="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
								<Building2 class="h-5 w-5" />
							</div>
							<div>
								<div class="text-xs font-bold uppercase text-slate-400 mb-1">Head Office</div>
								<div class="text-sm text-slate-700 leading-relaxed space-y-0.5">
									<p><span class="font-semibold text-slate-900">Floor No.:</span> 2nd Floor</p>
									<p><span class="font-semibold text-slate-900">Building No./Flat No.:</span> G-81 & G-82, Old No- G-23-A PVT Office No- 201</p>
									<p><span class="font-semibold text-slate-900">Road/Street:</span> Lakshmi Nagar Road</p>
									<p><span class="font-semibold text-slate-900">Locality/Sub Locality:</span> Lakshmi Nagar</p>
									<p><span class="font-semibold text-slate-900">City/Town/Village:</span> New Delhi</p>
									<p><span class="font-semibold text-slate-900">District:</span> East Delhi</p>
									<p><span class="font-semibold text-slate-900">State:</span> Delhi</p>
									<p><span class="font-semibold text-slate-900">PIN Code:</span> 110092</p>
								</div>
							</div>
						</div>

						<!-- Branch Office -->
						<div class="flex items-start gap-4">
							<div class="h-10 w-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0">
								<MapPin class="h-5 w-5" />
							</div>
							<div>
								<div class="text-xs font-bold uppercase text-slate-400 mb-1">Branch Office</div>
								<div class="text-sm font-medium text-slate-700 leading-relaxed space-y-0.5">
									<p>Prestige Arcade</p>
									<p>No 610 Outer Ring Road, Thimmaya Layout, Bangalore – 68</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Secondary Details Box -->
				<div class="bg-linear-to-r from-blue-700 to-indigo-600 p-8 rounded-3xl text-white space-y-4">
					<h4 class="text-lg font-bold">Instantly Demo?</h4>
					<p class="text-xs text-blue-100 leading-relaxed">
						Skip the form and register to join a scheduled live walkthrough with one of our glass operations experts.
					</p>
					<div class="relative">
						<button
							disabled
							class="w-full bg-white/70 text-blue-400 font-bold py-3 px-6 rounded-xl transition text-xs cursor-not-allowed"
						>
							Book Live Demo
						</button>
						<span class="absolute -top-2 -right-2 bg-amber-400 text-slate-900 text-[10px] font-bold px-2 py-1 rounded-full shadow-md">
							Launching Soon
						</span>
					</div>
				</div>
			</div>

			<!-- Right Column: Form -->
			<div class="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-slate-200/80 shadow-xs">
				{#if formSubmitted}
					<div class="py-16 text-center space-y-4 animate-fade-in">
						<div class="h-16 w-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
							<CheckCircle2 class="h-8 w-8" />
						</div>
						<h3 class="text-2xl font-extrabold text-slate-950 font-heading">Thank You!</h3>
						<p class="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
							Your message was successfully received. An ERP consultant will reach out via email or phone shortly.
						</p>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="space-y-6">
						<h3 class="text-2xl font-extrabold text-slate-950 font-heading mb-2">Send Enquiry</h3>
						
						<div class="grid grid-cols-2 gap-4">
							<div class="space-y-2">
								<label for="name" class="text-xs font-bold text-slate-700">Full Name *</label>
								<input 
									type="text" 
									id="name" 
									bind:value={formData.name} 
									required
									placeholder="e.g. Ramesh Kumar" 
									class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-500 focus:bg-white text-sm transition"
								/>
							</div>
							
							<div class="space-y-2">
								<label for="company" class="text-xs font-bold text-slate-700">Company Name *</label>
								<input 
									type="text" 
									id="company" 
									bind:value={formData.company} 
									required
									placeholder="e.g. Apex Glass Fab" 
									class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-500 focus:bg-white text-sm transition"
								/>
							</div>
						</div>

						<div class="grid grid-cols-2 gap-4">
							<div class="space-y-2">
								<label for="email" class="text-xs font-bold text-slate-700">Email Address *</label>
								<input 
									type="email" 
									id="email" 
									bind:value={formData.email} 
									required
									placeholder="e.g. name@company.com" 
									class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-500 focus:bg-white text-sm transition"
								/>
							</div>

							<div class="space-y-2">
								<label for="phone" class="text-xs font-bold text-slate-700">Phone Number *</label>
								<input 
									type="tel" 
									id="phone" 
									bind:value={formData.phone} 
									required
									placeholder="e.g. +91 9876543210" 
									class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-500 focus:bg-white text-sm transition"
								/>
							</div>
						</div>

						<div class="grid grid-cols-2 gap-4">
							<div class="space-y-2">
								<label for="state" class="text-xs font-bold text-slate-700">State *</label>
								<select 
									id="state" 
									bind:value={formData.state}
									onchange={handleStateChange}
									required
									class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-500 focus:bg-white text-sm transition"
								>
									<option value="" disabled selected>Select State</option>
									{#each Object.keys(stateCityMap) as stateName (stateName)}
										<option value={stateName}>{stateName}</option>
									{/each}
								</select>
							</div>

							<div class="space-y-2">
								<label for="city" class="text-xs font-bold text-slate-700">City * <span class="font-normal normal-case text-slate-400">(type to add your own)</span></label>
								<input
									type="text"
									id="city"
									list="city-options"
									bind:value={formData.city}
									required
									autocomplete="off"
									placeholder={formData.state ? 'Select or type your city' : 'Select a state first'}
									class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-500 focus:bg-white text-sm transition"
								/>
								<datalist id="city-options">
									{#each availableCities as cityName (cityName)}
										<option value={cityName}></option>
									{/each}
								</datalist>
							</div>
						</div>

						<div class="space-y-2">
							<label for="message" class="text-xs font-bold text-slate-700">Message / Requirements *</label>
							<textarea 
								id="message" 
								bind:value={formData.message} 
								required
								rows="4" 
								placeholder="Describe what core modules you are looking for..." 
								class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-500 focus:bg-white text-sm transition resize-none"
							></textarea>
						</div>

						<button 
							type="submit" 
							class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.99] transition flex items-center justify-center gap-2 group text-sm cursor-pointer"
						>
							<span>Send Enquiry</span>
							<Send class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</button>
					</form>
				{/if}
			</div>

		</div>
	</div>
</main>

<DemoModal
	isOpen={isDemoModalOpen}
	onClose={() => (isDemoModalOpen = false)}
/>

<ContactModal
	isOpen={isContactModalOpen}
	onClose={() => (isContactModalOpen = false)}
/>

<Footer />

<style>
	.animate-fade-in {
		animation: fadeIn 0.4s ease-out forwards;
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>