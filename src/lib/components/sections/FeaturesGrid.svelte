<script lang="ts">
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
  import {
    ChevronDown,
    ClipboardList,
    Package,
    Factory,
    Receipt,
    Users,
    Truck,
  } from 'lucide-svelte';
  import { slide } from 'svelte/transition';
  import type { ComponentType } from 'svelte';

  // ---------- Types ----------
  interface Point {
    title: string;
    content: string;
  }

  interface Feature {
    title: string;
    description: string;
    icon: ComponentType;
    bgColor: string;
    iconColor: string;
    points: Point[];
  }

  // ---------- Data ----------
  const features: Feature[] = [
    {
      title: 'Order Management',
      description:
        'Total lifecycle visibility — from quotation to dispatch — in one high-speed command center.',
      icon: ClipboardList,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      points: [
        {
          title: '1. Unified Order Hub',
          content:
            'Experience a single, high-speed command center where every active quotation, confirmed order, and completed shipment lives. Stop searching through physical files; find any order by client name, project ID, or date in milliseconds.',
        },
        {
          title: '2. Real-Time Status Transparency',
          content:
            'Get rid of the "What\'s the status of my glass?" phone calls. Admins and sales teams can view the exact stage of every order—whether it\'s in cutting, tempering, waiting for hardware, or out for dispatch—at a glance.',
        },
        {
          title: '3. Automatic Document Generation',
          content:
            'Eliminate the back-and-forth of creating PDFs. Firstcut24 automatically generates professional Tax Invoices, Delivery Challans, and Packing Lists the moment an order reaches the dispatch stage.',
        },
        {
          title: '4. WhatsApp Integration for Clients',
          content:
            'Stay ahead of your competition. Send order confirmation updates, PDF invoices, and automated delivery alerts directly to your client\'s WhatsApp, providing a modern, premium experience that builds immense trust.',
        },
        {
          title: '5. Full Order Traceability',
          content:
            'From the raw float glass sheet to the finished toughened pane, maintain a perfect audit trail. See exactly who approved the order, who processed the job card, and when it was scanned out for delivery—perfect for resolving disputes and ensuring accountability.',
        },
        {
          title: '6. Automated "Order-to-Cash" Workflow',
          content:
            'Never let a confirmed order slip through the cracks. Once an order is confirmed, the system automatically triggers the Production Job Card, allocates the necessary inventory, and queues the accounting entry—ensuring your operation runs like clockwork.',
        },
      ],
    },
    {
      title: 'Inventory Management',
      description:
        'Precision stock control across glass, hardware, and consumables — in any unit, at any location.',
      icon: Package,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      points: [
        {
          title: '1. Universal Dimensional Tracking',
          content:
            'Stop doing manual conversions in your head. Whether you buy in mm, inches, feet, or meters, Firstcut24 unifies all glass stock into a single, real-time dashboard so you always know exactly how much total area (SqM/SqFt) you have available.',
        },
        {
          title: '2. Unified Material Ecosystem',
          content:
            "Don't limit your tracking to just glass. Seamlessly manage your entire supply chain, including hardware fittings, aluminum profiles, silicones, and grinding wheels, all from the same interface where you track your jumbo sheets.",
        },
        {
          title: '3. Intelligent Reorder Alerts',
          content:
            "Never stop a project because you've run out of material. Set custom minimum-stock thresholds for your fast-moving items, and the system will automatically push reorder alerts to your dashboard, ensuring your procurement team is always one step ahead.",
        },
        {
          title: '4. Multi-Location Accountability',
          content:
            'Manage multiple storage racks, secondary warehouses, or factory floor zones effortlessly. Firstcut24 tracks every transfer between locations, ensuring zero "ghost stock" and total accountability across your entire facility.',
        },
        {
          title: '5. Barcode & Batch Traceability',
          content:
            'Eliminate manual counting errors and messy clipboards. Generate and scan barcodes for lightning-fast stock updates and trace every item back to its specific supplier batch—perfect for managing quality control and warranty claims.',
        },
        {
          title: '6. Deep Attribute Filtering',
          content:
            'Find the exact pane you need in seconds. Search and filter your entire inventory by specific glass types (Clear, Extra Clear, Tinted, Laminated), precise thicknesses, and color variations, even across thousands of SKUs.',
        },
      ],
    },
    {
      title: 'Production Planning',
      description:
        'Sync your factory floor — from job card to dispatch — with real-time visibility on every machine.',
      icon: Factory,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      points: [
        {
          title: '1. Intelligent Job Card Automation',
          content:
            'Say goodbye to manual scheduling. Once an order is confirmed, the system instantly generates digital job cards, distributing precise instructions to the right machines and workers without a single piece of paper changing hands.',
        },
        {
          title: '2. Real-Time Bottleneck Detection',
          content:
            "Stop guessing where your production slows down. Monitor your factory's pulse in real-time; our dashboard highlights exactly which departments or machines are currently overloaded, allowing you to reassign tasks and clear production jams before they delay your deliveries.",
        },
        {
          title: '3. Dynamic Machine & Workforce Loading',
          content:
            'Optimize your resources by assigning specific tasks based on machine capacity and worker skill sets. Ensure your high-value equipment like tempering furnaces and CNC cutters are always running at peak utilization.',
        },
        {
          title: '4. Live Progress Monitoring',
          content:
            "Get a bird's-eye view of every order on the floor. From the cutting table to final dispatch, track the real-time status of every piece of glass, giving your sales team the ability to provide clients with accurate, instant delivery updates.",
        },
        {
          title: '5. Multi-Department Routing',
          content:
            "Every glass factory has a unique flow. Firstcut24 lets you define and manage custom routing paths for your production departments—whether it's edging, coating, or lamination—ensuring every piece of glass takes the most efficient route through your facility.",
        },
        {
          title: '6. Data-Driven Efficiency Gains',
          content:
            "Use historical production data to identify recurring delays. By analyzing the time taken for every department to clear their tasks, you can continuously refine your planning processes, shorten your production cycles, and increase your factory's overall throughput.",
        },
      ],
    },
    {
      title: 'Accounting & GST',
      description:
        'Automated, GST-compliant financial workflows that sync straight from dispatch to your ledger.',
      icon: Receipt,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      points: [
        {
          title: '1. Unified Quote-to-Cash Workflow',
          content:
            'Break down the walls between your sales team and your accounts department. When a quotation becomes a confirmed order and is dispatched, the system automatically triggers the corresponding tax invoice, eliminating manual data entry and ensuring your billing is always aligned with your production output.',
        },
        {
          title: '2. Frictionless GST & E-Invoicing',
          content:
            'Stop the manual grind of tax compliance. Firstcut24 automatically calculates GST based on precise item categories and HSN codes, and generates E-Invoices instantly, ensuring you are 100% compliant with Indian tax regulations without the headache.',
        },
        {
          title: '3. Seamless Tally Prime Synchronization',
          content:
            'Keep your long-term accountants happy without sacrificing your modern factory efficiency. With our one-click .xml export, your complex, manufacturing-specific financial data is formatted perfectly to sync instantly with Tally Prime, bridging the gap between Firstcut24 and your existing accounting setup.',
        },
        {
          title: '4. Real-Time Financial Visibility',
          content:
            'Move beyond month-end spreadsheets. View your Profit & Loss statements and Balance Sheets in real-time. Know exactly where your cash flow stands today, allowing you to make smarter business decisions based on live financial data rather than outdated reports.',
        },
        {
          title: '5. Intelligent Tax Configuration',
          content:
            'Pricing glass can be complex with varying tax requirements. Whether your clients need quotes to be Tax-Inclusive or Tax-Exclusive, Firstcut24 handles the reverse-calculations instantly, ensuring your margins stay protected and your billing is error-free.',
        },
        {
          title: '6. Audit-Ready Precision',
          content:
            'Every single transaction—from raw material purchase to final product dispatch—is recorded with a full double-entry audit trail. Your books will be perfectly balanced and organized, making tax audits or financial reviews quick, painless, and completely transparent.',
        },
      ],
    },
    {
      title: 'Employee Management',
      description:
        'Attendance, payroll, compliance, and HR workflows — built for the pace of a manufacturing floor.',
      icon: Users,
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      points: [
        {
          title: '1. Seamless Biometric Integration',
          content:
            'Connect your existing factory floor hardware—like fingerprint scanners or RFID punch-clocks—directly to the ERP. Attendance data flows into the system automatically, eliminating the risk of manual tampering or "buddy punching."',
        },
        {
          title: '2. Flexible Shift & Overtime Logic',
          content:
            "Manufacturing doesn't stop at 5 PM. Configure complex, multi-shift factory rotations with ease. The system automatically calculates precise overtime hours and production bonuses based on your custom factory floor rules.",
        },
        {
          title: '3. Digital Leave & Approval Workflow',
          content:
            'Move away from paper leave slips and WhatsApp requests. Empower workers and floor managers to apply for and approve leaves digitally, ensuring you always know who is available before you plan your daily production.',
        },
        {
          title: '4. Statutory Compliance Simplified',
          content:
            'Stay compliant with Indian labor laws without the constant headache. Automatically calculate complex statutory deductions like Provident Fund (PF), Employee State Insurance (ESI), and Professional Tax (PT), with reports generated and ready for government filing.',
        },
        {
          title: '5. Centralized Digital Employee Files',
          content:
            'Replace your overflowing physical filing cabinets with a secure, searchable digital database. Keep all KYC documents, employment contracts, bank details, and training certifications organized in one protected location.',
        },
        {
          title: '6. Integrated Labor Costing',
          content:
            'See how your HR costs impact your bottom line in real-time. Because the HR module is linked to the rest of the ERP, the system pulls your payroll and overtime data directly into your OpEx dashboard, showing you exactly how much labor is costing you per square meter of glass produced.',
        },
      ],
    },
    {
      title: 'Site Customers CRM',
      description:
        'Manage sites, not just leads — with a sales pipeline and service history built for glass projects.',
      icon: Truck,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      points: [
        {
          title: '1. Project-to-Site Mapping',
          content:
            'Glass projects often involve multiple locations. Track multiple project sites (e.g., specific apartment buildings or commercial towers) under a single customer profile, ensuring you never mix up installation schedules or dimensions between different sites.',
        },
        {
          title: '2. Tailored Sales Pipeline',
          content:
            'Standard CRMs are too generic. Our pipeline is built for glass manufacturing, with custom stages like "Site Measurement Scheduled," "Architect Approval Pending," "Ready for Installation," and "After-Sales Support" so you always know where your revenue is trapped.',
        },
        {
          title: '3. Service History Lookup',
          content:
            'Glass requires long-term trust. Instantly pull up the full installation history of any site, including specific glass thickness, tint, and hardware used years ago, allowing your team to resolve service calls or warranty claims in minutes.',
        },
        {
          title: '4. Architect & Contractor Network',
          content:
            'Your best sales reps are often your local architects and contractors. Maintain a dedicated directory of these influencers, track their project referrals, and nurture those relationships to ensure your brand remains their first choice for every new tender.',
        },
        {
          title: '5. Integrated Communication Logs',
          content:
            'Stop losing project details in personal emails or WhatsApp chats. Centralize all site-related communication, notes, and file attachments within the customer profile so any team member can step in and provide a professional update instantly.',
        },
        {
          title: '6. Site-Specific Follow-Up Automation',
          content:
            'Never let a site lead go cold. Set automated reminders to follow up on "Site Measurement" status or "Post-Installation" satisfaction, ensuring you stay top-of-mind and secure repeat business from builders and developers.',
        },
      ],
    },
  ];

  // ---------- State ----------
  // Tracks which point index is open, per card. null = none open for that card.
  let openPoint = $state<(number | null)[]>(features.map(() => null));

  function togglePoint(featureIndex: number, pointIndex: number) {
    openPoint[featureIndex] = openPoint[featureIndex] === pointIndex ? null : pointIndex;
  }
</script>

<section class="bg-white py-14 sm:py-20 lg:py-24">
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <SectionHeading
      badge="Everything You Need"
      title="Everything Your Glass Business Needs"
      description="Built from the ground up for glass fabricators, retailers, and contractors—every feature designed for your workflow"
    />

    <div class="grid gap-6 sm:gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {#each features as feature, fIndex (feature.title)}
        {@const FeatureIcon = feature.icon}
        <div
          class="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 transition-all duration-300 hover:shadow-lg"
        >
          <!-- Icon -->
          <div
            class={`mb-5 sm:mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor}`}
          >
            <FeatureIcon class={`h-6 w-6 ${feature.iconColor}`} strokeWidth={2} />
          </div>

          <!-- Title -->
          <h3 class="mb-3 text-lg sm:text-xl font-semibold text-slate-900">
            {feature.title}
          </h3>

          <!-- Short Description -->
          <p class="mb-5 leading-7 text-slate-500 text-sm sm:text-base">
            {feature.description}
          </p>

          <!-- Accordion: all points with full content -->
          <div class="space-y-2">
            {#each feature.points as point, pIndex}
              <div class="rounded-xl border border-slate-200/80 overflow-hidden bg-slate-50/50">
                <button
                  type="button"
                  onclick={() => togglePoint(fIndex, pIndex)}
                  class="w-full px-3.5 py-2.5 flex items-center justify-between text-left cursor-pointer hover:bg-slate-100/60 transition-colors"
                >
                  <span class="text-[12.5px] sm:text-[13px] font-semibold text-slate-800 pr-3">
                    {point.title}
                  </span>
                  <ChevronDown
                    class="h-4 w-4 text-slate-400 flex-shrink-0 transition-transform duration-200 {openPoint[fIndex] === pIndex ? 'rotate-180 text-blue-600' : ''}"
                  />
                </button>
                {#if openPoint[fIndex] === pIndex}
                  <div
                    transition:slide
                    class="px-3.5 pb-3.5 pt-1 text-[12px] sm:text-[12.5px] text-slate-500 leading-relaxed border-t border-slate-200/60"
                  >
                    {point.content}
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>