<script lang="ts">
	type IconType =
		| 'sparkle'
		| 'customers'
		| 'income'
		| 'cart'
		| 'checkout'
		| 'payment'
		| 'sale'
		| 'meeting'
		| 'projects';

	type WelcomeCard = {
		kind: 'welcome';
		name: string;
		budgetLabel: string;
		budgetValue: string;
		expenseLabel: string;
		expenseValue: string;
	};

	type GoalCard = {
		kind: 'goal';
		icon: IconType;
		iconBg: string;
		iconColor: string;
		title: string;
		subtitle: string;
		percent: number;
		barColor: string;
	};

	type IncomeCard = {
		kind: 'income';
		icon: IconType;
		iconBg: string;
		iconColor: string;
		title: string;
		value: string;
		change: string;
		changeType: 'up' | 'down';
		values: number[];
		lineColor: string;
	};

	type StatTile = {
		label: string;
		value: string;
		change: string;
		changeType: 'up' | 'down';
		bg: string;
		text: string;
	};

	type StatPairCard = {
		kind: 'statPair';
		tiles: [StatTile, StatTile];
	};

	type ActivityItem = { time: string; text: string; dot: string };

	type ActivityCard = {
		kind: 'activity';
		title: string;
		items: ActivityItem[];
	};

	type ProfitRow = { label: string; value: string; change: string; changeType: 'up' | 'down' };

	type ProfitCard = {
		kind: 'profit';
		title: string;
		subtitle: string;
		value: string;
		values: number[];
		lineColor: string;
		rows: ProfitRow[];
	};

	type PanelCard = WelcomeCard | GoalCard | IncomeCard | StatPairCard | ActivityCard | ProfitCard;

	function buildLinePath(values: number[], width = 240, height = 60, pad = 4) {
		const max = Math.max(...values);
		const min = Math.min(...values);
		const range = max - min || 1;
		const stepX = (width - pad * 2) / (values.length - 1);

		const points = values.map((v, i) => ({
			x: pad + i * stepX,
			y: pad + (height - pad * 2) * (1 - (v - min) / range)
		}));

		const line = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

		return { line, points, width, height };
	}

	// ---------- Left column ----------
	const leftCards: PanelCard[] = [
		{
			kind: 'welcome',
			name: 'Jannie',
			budgetLabel: 'Budget',
			budgetValue: '₹98,450',
			expenseLabel: 'Expense',
			expenseValue: '₹2,440'
		},
		{
			kind: 'goal',
			icon: 'customers',
			iconBg: 'bg-emerald-100',
			iconColor: 'text-emerald-600',
			title: 'New Customers',
			subtitle: 'New goals',
			percent: 83,
			barColor: 'bg-emerald-400'
		},
		{
			kind: 'income',
			icon: 'income',
			iconBg: 'bg-pink-100',
			iconColor: 'text-pink-600',
			title: 'Total Income',
			value: '₹680',
			change: '+18%',
			changeType: 'up',
			values: [30, 46, 24, 52, 34, 48, 26, 40],
			lineColor: '#7C6FF0'
		},
		{
			kind: 'statPair',
			tiles: [
				{ label: 'Customers', value: '36,358', change: '-12%', changeType: 'down', bg: 'bg-emerald-200/70', text: 'text-emerald-900' },
				{ label: 'Projects', value: '78,298', change: '+31.6%', changeType: 'up', bg: 'bg-pink-200/70', text: 'text-pink-900' }
			]
		},
		{
			kind: 'activity',
			title: 'Recent Activity',
			items: [
				{ time: '09:46', text: 'Payment was made of ₹364.85 to Michael Anderson', dot: 'bg-indigo-400' },
				{ time: '09:46', text: 'New sale recorded #ML-3457', dot: 'bg-emerald-400' },
				{ time: '09:46', text: 'Project meeting scheduled', dot: 'bg-pink-400' },
				{ time: '09:46', text: 'Payment received from John Doe of ₹585.90', dot: 'bg-indigo-400' }
			]
		},
		{
			kind: 'profit',
			title: 'Annual Profit',
			subtitle: 'Conversion Rate',
			value: '18.4%',
			values: [20, 38, 28, 44, 30, 42, 24, 36],
			lineColor: '#7C6FF0',
			rows: [
				{ label: 'Added to Cart', value: '₹21,120.70', change: '+13.2%', changeType: 'up' },
				{ label: 'Reached Checkout', value: '₹18,100.00', change: '+7.4%', changeType: 'up' },
				{ label: 'Purchased', value: '₹6,400.50', change: '+6.1%', changeType: 'up' }
			]
		}
	];

	// ---------- Middle column ----------
	const middleCards: PanelCard[] = [
		{
			kind: 'welcome',
			name: 'Alex',
			budgetLabel: 'Budget',
			budgetValue: '₹1,42,900',
			expenseLabel: 'Expense',
			expenseValue: '₹5,120'
		},
		{
			kind: 'goal',
			icon: 'projects',
			iconBg: 'bg-indigo-100',
			iconColor: 'text-indigo-600',
			title: 'Team Goals',
			subtitle: 'Sprint progress',
			percent: 64,
			barColor: 'bg-indigo-400'
		},
		{
			kind: 'income',
			icon: 'income',
			iconBg: 'bg-emerald-100',
			iconColor: 'text-emerald-600',
			title: 'Monthly Revenue',
			value: '₹24,180',
			change: '+9.2%',
			changeType: 'up',
			values: [22, 30, 26, 38, 30, 44, 36, 50],
			lineColor: '#2FBFA8'
		},
		{
			kind: 'statPair',
			tiles: [
				{ label: 'Orders', value: '12,845', change: '+9.4%', changeType: 'up', bg: 'bg-indigo-200/70', text: 'text-indigo-900' },
				{ label: 'Refunds', value: '318', change: '-2.8%', changeType: 'down', bg: 'bg-pink-200/70', text: 'text-pink-900' }
			]
		},
		{
			kind: 'activity',
			title: 'Team Activity',
			items: [
				{ time: '11:02', text: 'Design review completed for Nova v2', dot: 'bg-emerald-400' },
				{ time: '10:40', text: 'New invoice sent to Priya Nair', dot: 'bg-indigo-400' },
				{ time: '10:15', text: 'Support ticket #4821 resolved', dot: 'bg-pink-400' },
				{ time: '09:52', text: 'Payment received from Ava Whitfield of ₹482.00', dot: 'bg-indigo-400' }
			]
		},
		{
			kind: 'profit',
			title: 'Quarterly Profit',
			subtitle: 'Conversion Rate',
			value: '22.1%',
			values: [18, 26, 34, 24, 40, 32, 46, 38],
			lineColor: '#2FBFA8',
			rows: [
				{ label: 'Added to Cart', value: '₹16,340.00', change: '+10.5%', changeType: 'up' },
				{ label: 'Reached Checkout', value: '₹12,980.20', change: '+5.9%', changeType: 'up' },
				{ label: 'Purchased', value: '₹5,120.40', change: '-1.4%', changeType: 'down' }
			]
		}
	];

	// Duplicated so the track's translateY(-50%) loop point lines up exactly
	// with the start of the second copy — no visible seam.
	const loopedLeft = [...leftCards, ...leftCards];
	const loopedMiddle = [...middleCards, ...middleCards];

	function floatDelay(index: number) {
		return `${(index % 6) * 0.35}s`;
	}
</script>

{#snippet cardIcon(type: IconType)}
	{#if type === 'sparkle'}
		<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none">
			<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" fill="currentColor" />
		</svg>
	{:else if type === 'customers'}
		<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none">
			<circle cx="9" cy="8.5" r="3" stroke="currentColor" stroke-width="1.6" />
			<path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
			<circle cx="17" cy="9" r="2.2" stroke="currentColor" stroke-width="1.4" />
			<path d="M15.5 19c.2-2.2 1.8-3.8 3.8-3.8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
		</svg>
	{:else if type === 'income'}
		<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none">
			<rect x="3" y="6" width="18" height="12" rx="2.5" stroke="currentColor" stroke-width="1.6" />
			<circle cx="12" cy="12" r="2.4" stroke="currentColor" stroke-width="1.6" />
		</svg>
	{:else if type === 'cart'}
		<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none">
			<path d="M4 6h2l1.6 9.2a1.5 1.5 0 001.5 1.3h7.3a1.5 1.5 0 001.5-1.2L19.5 9H7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
			<circle cx="10" cy="19.5" r="1.2" fill="currentColor" />
			<circle cx="16.5" cy="19.5" r="1.2" fill="currentColor" />
		</svg>
	{:else if type === 'checkout'}
		<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none">
			<rect x="3.5" y="5" width="17" height="14" rx="2" stroke="currentColor" stroke-width="1.5" />
			<path d="M7 9.5h10M7 13h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
		</svg>
	{:else if type === 'payment'}
		<svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none">
			<path d="M12 2v20M17 6.5c0-1.7-2-3-5-3s-5 1.3-5 3 2.2 2.7 5 3 5 1.4 5 3-2 3-5 3-5-1.3-5-3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
		</svg>
	{:else if type === 'sale'}
		<svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none">
			<path d="M20 12l-8 8-9-9V4h7l10 8z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
			<circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" />
		</svg>
	{:else if type === 'meeting'}
		<svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none">
			<rect x="3.5" y="5" width="17" height="15" rx="2" stroke="currentColor" stroke-width="1.5" />
			<path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
		</svg>
	{:else}
		<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none">
			<path d="M4 8l4-3h8l4 3v11a1 1 0 01-1 1H5a1 1 0 01-1-1V8z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
			<path d="M4 8h16" stroke="currentColor" stroke-width="1.6" />
		</svg>
	{/if}
{/snippet}

{#snippet changeText(change: string, changeType: 'up' | 'down')}
	<span class={`inline-flex items-center gap-0.5 text-[11px] font-semibold ${changeType === 'up' ? 'text-emerald-600' : 'text-rose-500'}`}>
		{#if changeType === 'up'}
			<svg viewBox="0 0 10 10" class="h-2.5 w-2.5"><path d="M5 1l4 6H1z" fill="currentColor" /></svg>
		{:else}
			<svg viewBox="0 0 10 10" class="h-2.5 w-2.5"><path d="M5 9L1 3h8z" fill="currentColor" /></svg>
		{/if}
		{change}
	</span>
{/snippet}

{#snippet welcomePanel(card: WelcomeCard, index: number)}
	<div
		class="card-float relative overflow-hidden rounded-3xl bg-linear-to-br from-[#6D5DF6] to-[#4B3FE4] p-5 text-white shadow-[0_16px_36px_rgba(76,63,228,0.35)]"
		style={`animation-delay:${floatDelay(index)}`}
	>
		<div class="relative z-10">
			<div class="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
				{@render cardIcon('sparkle')}
			</div>
			<h4 class="text-lg font-bold leading-snug">Welcome Back<br />{card.name}</h4>
			<div class="mt-6 flex gap-8">
				<div>
					<p class="text-xs text-white/70">{card.budgetLabel}</p>
					<p class="mt-1 font-mono text-base font-bold">{card.budgetValue}</p>
				</div>
				<div>
					<p class="text-xs text-white/70">{card.expenseLabel}</p>
					<p class="mt-1 font-mono text-base font-bold">{card.expenseValue}</p>
				</div>
			</div>
		</div>
		<svg viewBox="0 0 100 100" class="pointer-events-none absolute -right-4 -bottom-6 h-28 w-28 opacity-30">
			<circle cx="50" cy="50" r="46" stroke="white" stroke-width="6" fill="none" />
			<circle cx="50" cy="50" r="30" stroke="white" stroke-width="6" fill="none" />
			<circle cx="50" cy="50" r="14" fill="white" />
		</svg>
	</div>
{/snippet}

{#snippet goalPanel(card: GoalCard, index: number)}
	<div
		class="card-float rounded-3xl border border-black/5 bg-white p-5 shadow-[0_10px_28px_rgba(17,24,39,0.06)]"
		style={`animation-delay:${floatDelay(index)}`}
	>
		<div class="mb-5 flex items-center gap-3">
			<div class={`flex h-9 w-9 items-center justify-center rounded-xl ${card.iconBg} ${card.iconColor}`}>
				{@render cardIcon(card.icon)}
			</div>
			<h4 class="text-sm font-semibold text-slate-800">{card.title}</h4>
		</div>
		<div class="flex items-center justify-between text-xs text-slate-400">
			<span>{card.subtitle}</span>
			<span class="font-semibold text-slate-700">{card.percent}%</span>
		</div>
		<div class="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
			<div class={`h-full rounded-full ${card.barColor}`} style={`width:${card.percent}%`}></div>
		</div>
	</div>
{/snippet}

{#snippet incomePanel(card: IncomeCard, index: number)}
	{@const path = buildLinePath(card.values)}
	<div
		class="card-float rounded-3xl border border-black/5 bg-white p-5 shadow-[0_10px_28px_rgba(17,24,39,0.06)]"
		style={`animation-delay:${floatDelay(index)}`}
	>
		<div class="mb-4 flex items-center gap-3">
			<div class={`flex h-9 w-9 items-center justify-center rounded-xl ${card.iconBg} ${card.iconColor}`}>
				{@render cardIcon(card.icon)}
			</div>
			<h4 class="text-sm font-semibold text-slate-800">{card.title}</h4>
		</div>
		<div class="flex items-center justify-between gap-4">
			<div>
				<p class="font-mono text-2xl font-bold text-slate-900">{card.value}</p>
				<div class="mt-1">{@render changeText(card.change, card.changeType)}</div>
			</div>
			<svg viewBox={`0 0 ${path.width} ${path.height}`} class="h-12 w-28">
				<path d={path.line} fill="none" stroke={card.lineColor} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</div>
	</div>
{/snippet}

{#snippet statPairPanel(card: StatPairCard, index: number)}
	<div class="card-float grid grid-cols-2 gap-4" style={`animation-delay:${floatDelay(index)}`}>
		{#each card.tiles as tile (tile.label)}
			<div class={`rounded-3xl ${tile.bg} p-4 shadow-[0_10px_28px_rgba(17,24,39,0.06)]`}>
				<p class={`text-xs font-medium ${tile.text} opacity-80`}>{tile.label}</p>
				<p class={`mt-2 font-mono text-xl font-bold ${tile.text}`}>{tile.value}</p>
				<div class="mt-1">{@render changeText(tile.change, tile.changeType)}</div>
			</div>
		{/each}
	</div>
{/snippet}

{#snippet activityPanel(card: ActivityCard, index: number)}
	<div
		class="card-float rounded-3xl border border-black/5 bg-white p-5 shadow-[0_10px_28px_rgba(17,24,39,0.06)]"
		style={`animation-delay:${floatDelay(index)}`}
	>
		<h4 class="mb-4 text-sm font-semibold text-slate-800">{card.title}</h4>
		<div class="space-y-3.5">
			{#each card.items as item, i (i)}
				<div class="flex items-start gap-3">
					<span class="mt-1 text-[10px] text-slate-400">{item.time}</span>
					<span class={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${item.dot}`}></span>
					<p class="flex-1 text-xs leading-snug text-slate-600">{item.text}</p>
				</div>
			{/each}
		</div>
	</div>
{/snippet}

{#snippet profitPanel(card: ProfitCard, index: number)}
	{@const path = buildLinePath(card.values)}
	<div
		class="card-float rounded-3xl border border-black/5 bg-white p-5 shadow-[0_10px_28px_rgba(17,24,39,0.06)]"
		style={`animation-delay:${floatDelay(index)}`}
	>
		<h4 class="text-sm font-semibold text-slate-800">{card.title}</h4>
		<div class="mt-3 flex items-center justify-between">
			<p class="text-xs text-slate-400">{card.subtitle}</p>
			<p class="font-mono text-lg font-bold text-slate-900">{card.value}</p>
		</div>
		<svg viewBox={`0 0 ${path.width} ${path.height}`} class="mt-2 h-14 w-full">
			<path d={path.line} fill="none" stroke={card.lineColor} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
		<div class="mt-4 space-y-2.5 border-t border-slate-100 pt-3">
			{#each card.rows as row (row.label)}
				<div class="flex items-center justify-between text-xs">
					<span class="text-slate-500">{row.label}</span>
					<span class="font-mono font-semibold text-slate-800">{row.value}</span>
					{@render changeText(row.change, row.changeType)}
				</div>
			{/each}
		</div>
	</div>
{/snippet}

{#snippet dashboardCard(card: PanelCard, index: number)}
	{#if card.kind === 'welcome'}
		{@render welcomePanel(card, index)}
	{:else if card.kind === 'goal'}
		{@render goalPanel(card, index)}
	{:else if card.kind === 'income'}
		{@render incomePanel(card, index)}
	{:else if card.kind === 'statPair'}
		{@render statPairPanel(card, index)}
	{:else if card.kind === 'activity'}
		{@render activityPanel(card, index)}
	{:else}
		{@render profitPanel(card, index)}
	{/if}
{/snippet}

<section class="relative overflow-hidden bg-[#F4F5FB] pt-0">
	<div class="relative mx-auto grid max-w-4xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:px-8">
		<div class="column col-left relative h-140 overflow-hidden sm:h-160 lg:h-190">
			<div class="track flex flex-col gap-5">
				{#each loopedLeft as card, i (i)}
					{@render dashboardCard(card, i)}
				{/each}
			</div>
		</div>

		<div class="column col-middle relative hidden h-140 overflow-hidden sm:h-160 md:block lg:h-190">
			<div class="track flex flex-col gap-5">
				{#each loopedMiddle as card, i (i)}
					{@render dashboardCard(card, i)}
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes scroll-loop {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-50%);
		}
	}

	@keyframes card-float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-5px);
		}
	}

	.col-left .track {
		animation: scroll-loop 24s linear infinite;
	}

	.col-middle .track {
		animation: scroll-loop 30s linear infinite reverse;
	}

	.column:hover .track {
		animation-play-state: paused;
	}

	.card-float {
		animation: card-float 5s ease-in-out infinite;
	}

	.column:hover .card-float {
		animation-play-state: paused;
	}

	@media (prefers-reduced-motion: reduce) {
		.track {
			animation: none;
		}
		.card-float {
			animation: none;
		}
	}
</style>