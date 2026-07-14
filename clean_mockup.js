const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'lib', 'components', 'sections', 'ModulesTabs.svelte');
let content = fs.readFileSync(filePath, 'utf8');

const startMarker = '<!-- Left: Mockup UI -->';
const endMarker = '<!-- Right Content (dynamic) -->';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.error('Markers not found!');
    process.exit(1);
}

const before = content.substring(0, startIndex);
const after = content.substring(endIndex);

const replacement = `<!-- Left: Mockup UI -->
			<div class="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
				{#key activeTab}
					<div class="w-full animate-fadeIn">
						<ModuleMockup {activeTab} />
					</div>
				{/key}
			</div>

			`;

const newContent = before + replacement + after;
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Successfully updated ModulesTabs.svelte!');
