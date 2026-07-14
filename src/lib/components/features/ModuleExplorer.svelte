<script lang="ts">
  import {
    FileText, Package, Factory, Diamond, Landmark, Users,
    Sparkles, Search, ChevronRight, Phone, Mail, User,
    ChevronDown, ShoppingCart, Wallet
  } from 'lucide-svelte';
  import { slide } from 'svelte/transition';
  import type { ComponentType } from 'svelte';

  // ---------- Types ----------
  interface Bullet {
    bold: string;
    text: string;
  }

  interface Pillar {
    title: string;
    intro?: string;
    bullets: Bullet[];
  }

  type MockupKind =
    | 'quotation'
    | 'inventory'
    | 'production'
    | 'accounts'
    | 'optimizer'
    | 'hr'
    | 'opex'
    | 'sales';

  interface ModuleData {
    id: string;
    label: string;
    icon: ComponentType;
    badge: string;
    title: string;
    description: string;
    pillars: Pillar[];
    tip: string;
    cta: string;
    mockup: MockupKind;
  }

  // ---------- State ----------
  let activeModule = $state(0);
  let openPillar = $state<number | null>(0);

  function selectModule(index: number) {
    activeModule = index;
    openPillar = 0;
  }

  function togglePillar(i: number) {
    openPillar = openPillar === i ? null : i;
  }

  // ---------- Module Data ----------
  const modules: ModuleData[] = [
    // 1. AI Optimizer
    {
      id: 'optimizer',
      label: 'AI Optimizer',
      icon: Diamond,
      badge: 'AI Optimizer Module',
      title: 'AI-Powered Optimization Engine',
      description:
        'Maximize yield, eliminate waiting times, and slash raw material costs with a background AI that works faster than your machines.',
      mockup: 'optimizer',
      tip: 'Save 15-25% on raw material costs · Zero CNC waiting time · Predictive sheet planning',
      cta: 'Explore Module',
      pillars: [
        {
          title: '1. Always-On Background Optimization',
          bullets: [
            {
              bold: 'Continuous Calculation:',
              text: 'The moment an order is confirmed, our AI optimizer instantly goes to work in the background. It continuously calculates millions of cutting layouts until your target wastage percentage is achieved—no manual triggering required.',
            },
          ],
        },
        {
          title: '2. Instant Production Triggers',
          bullets: [
            {
              bold: 'Real-Time Green-Light:',
              text: 'Once the AI calculates a high-yield layout (e.g., dropping wastage below 10%), it instantly sends a real-time trigger to the dashboard. With one glance, floor managers know the batch is ready for immediate production.',
            },
          ],
        },
        {
          title: '3. Zero CNC Bottlenecks',
          bullets: [
            {
              bold: 'Faster Cutting Tables:',
              text: "Completely eliminate downtime caused by manually entering dimensions into the CNC machine's optimizer. The ERP's AI handles the heavy computational lifting upfront, so cutting tables spend less time waiting and more time cutting glass.",
            },
          ],
        },
        {
          title: '4. Intelligent Auto-Separation of Quote Data',
          bullets: [
            {
              bold: 'Automatic Batching:',
              text: 'Never waste time manually filtering mixed orders. The AI automatically parses complex, multi-item quotes and instantly separates the data, creating dedicated optimization batches based strictly on glass type, thickness, and color.',
            },
          ],
        },
        {
          title: '5. Smart Cost-Based Material Routing',
          bullets: [
            {
              bold: 'Primary vs Secondary Stock:',
              text: 'Maximize profit margins by defining Primary and Secondary optimization parameters. The AI intelligently prioritizes cutting from your Primary inventory (discounted rate) over your Secondary inventory (premium rate).',
            },
          ],
        },
        {
          title: '6. Proactive Financial Control',
          bullets: [
            {
              bold: 'Scenario Simulation:',
              text: 'Simulate different material batches and yield scenarios before committing. Definitively analyze raw material wastage and protect your bottom-line profit before a single physical cut is made.',
            },
          ],
        },
        {
          title: '7. Predictive Sheet Calculation',
          bullets: [
            {
              bold: 'Upfront Sheet Count:',
              text: 'Get an exact, upfront count of the raw glass jumbo sheets required to complete an entire order—preventing mid-shift inventory shortages and production halts.',
            },
          ],
        },
        {
          title: '8. Pre-Production Decision Making',
          bullets: [
            {
              bold: 'Predictive Yields:',
              text: "While CNC software handles final physical machine paths, the ERP's optimizer provides highly accurate predictive yields in advance—giving plant heads the data needed to approve runs, delay batches, or adjust parameters.",
            },
          ],
        },
        {
          title: '9. Seamless Manual Override',
          bullets: [
            {
              bold: 'Full Operator Control:',
              text: 'Automation is powerful, but flexibility is essential. A fully functional manual optimization option is always available for highly customized or unique cutting runs.',
            },
          ],
        },
        {
          title: '10. Maximum Yield with Half-Cut Utilization',
          bullets: [
            {
              bold: 'Offcut Reuse:',
              text: "Don't let valuable offcuts eat into your profits. Manual optimization mode lets your team integrate existing half-cuts, offcuts, and remnants into the current production run.",
            },
          ],
        },
      ],
    },

    // 2. Financial & Accounting
    {
      id: 'accounts',
      label: 'Financial & Accounting',
      icon: Landmark,
      badge: 'Accounts Module',
      title: 'Financial & Accounting Module',
      description:
        'Gain total control over your factory’s finances with an automated, GST-compliant accounting engine built specifically for the speed of the glass industry.',
      mockup: 'accounts',
      tip: 'Automate 90% of accounting tasks · Stay GST compliant · Export to Tally instantly',
      cta: 'Explore Module',
      pillars: [
        {
          title: '1. True Double-Entry Foundation',
          bullets: [
            {
              bold: 'Bulletproof Architecture:',
              text: 'Firstcut24 utilizes a strict double-entry bookkeeping system, ensuring every single transaction is perfectly balanced, mathematically accurate, and trusted by chartered accountants.',
            },
          ],
        },
        {
          title: '2. Zero-Touch Ledger Automation',
          bullets: [
            {
              bold: 'Instant Journal Posting:',
              text: 'The moment a quotation is converted into a confirmed invoice or a payment is logged, the system automatically posts the exact journal entries to the appropriate ledgers in real-time.',
            },
          ],
        },
        {
          title: '3. Frictionless GST Compliance',
          bullets: [
            {
              bold: 'HSN-Based Auto-Tax:',
              text: 'The system automatically calculates taxes based on precise HSN codes and generates comprehensive, error-free GST compliance reports (GSTR-1, GSTR-2, GSTR-3B) ready for direct filing.',
            },
          ],
        },
        {
          title: '4. Seamless Tally Prime Export',
          bullets: [
            {
              bold: 'One-Click Migration:',
              text: 'A highly optimized export tool formats your complex financial data perfectly for seamless, one-click migration directly into Tally Prime.',
            },
          ],
        },
        {
          title: '5. Live P&L and Balance Sheets',
          bullets: [
            {
              bold: 'Up-to-the-Second Reports:',
              text: 'Never wait until month-end to know if your factory is making money. Instantly generate live Profit & Loss statements and Balance Sheets.',
            },
          ],
        },
        {
          title: '6. Unified Quote-to-Cash Workflow',
          bullets: [
            {
              bold: 'Zero Re-Typing:',
              text: 'Because accounting is deeply integrated with the Quotation and Production modules, a single click turns a finalized dispatch into a fully accounted tax invoice.',
            },
          ],
        },
        {
          title: '7. Audit-Ready Financial Tracking',
          bullets: [
            {
              bold: 'Total Transparency:',
              text: 'Every transaction, adjustment, and auto-journal entry leaves a crystal-clear digital paper trail, permanently ready for financial audits.',
            },
          ],
        },
        {
          title: '8. Intelligent Tax Configuration',
          bullets: [
            {
              bold: 'Inclusive or Exclusive:',
              text: 'Whether clients require quotes inclusive or exclusive of tax, the system handles the complex reverse-calculations instantly.',
            },
          ],
        },
      ],
    },

    // 3. HR & Payroll
    {
      id: 'hr',
      label: 'HR & Payroll',
      icon: Users,
      badge: 'HR Module',
      title: 'HR & Payroll Management Module',
      description:
        'Empower your workforce and automate your payroll with a system designed specifically for the dynamic shifts and complex labor requirements of a manufacturing floor.',
      mockup: 'hr',
      tip: 'Process payroll in minutes · Zero attendance errors · Full statutory compliance',
      cta: 'Explore Module',
      pillars: [
        {
          title: '1. Paperless Employee Onboarding',
          bullets: [
            {
              bold: 'Digital Day-One:',
              text: 'Digitally onboard new factory workers, machine operators, and administrative staff, capturing all essential KYC documents, bank details, and contracts in one secure system.',
            },
          ],
        },
        {
          title: '2. Centralized Digital Profiles',
          bullets: [
            {
              bold: 'Searchable Workforce Database:',
              text: 'Maintain a comprehensive, instantly searchable database of your entire workforce, including emergency contacts, skill sets, training history, and role assignments.',
            },
          ],
        },
        {
          title: '3. Seamless Biometric Integration',
          bullets: [
            {
              bold: 'Hardware Sync:',
              text: "Firstcut24 seamlessly syncs with your existing biometric scanners, RFID badge readers, or facial recognition devices to capture perfectly accurate punch-in and punch-out times.",
            },
          ],
        },
        {
          title: '4. Real-Time Factory Attendance',
          bullets: [
            {
              bold: 'Live Dashboard:',
              text: 'The live attendance dashboard instantly displays exactly who is on the factory floor, who is late, and who is absent—allowing you to reassign machines and prevent bottlenecks.',
            },
          ],
        },
        {
          title: '5. Smart Shift & Overtime Tracking',
          bullets: [
            {
              bold: 'Automatic OT Calculation:',
              text: 'Effortlessly manage complex, multi-shift factory schedules. The system automatically calculates precise overtime hours based on your custom factory rules.',
            },
          ],
        },
        {
          title: '6. Automated Leave Management',
          bullets: [
            {
              bold: 'Digital Approvals:',
              text: 'Employees and managers can track leave balances, apply for time off, and process hierarchical approvals digitally—no more paper slips or WhatsApp requests.',
            },
          ],
        },
        {
          title: '7. Flexible Salary Structures & Advances',
          bullets: [
            {
              bold: 'Hourly, Fixed & Bonus:',
              text: 'Easily configure complex salary structures that accommodate hourly wages, fixed salaries, production bonuses, plus tracking of employee loans and salary advances.',
            },
          ],
        },
        {
          title: '8. 1-Click Payroll Generation',
          bullets: [
            {
              bold: 'Five-Minute Payroll:',
              text: 'Once attendance, overtime, and leaves are verified, Firstcut24 instantly calculates net pay and generates bulk salary slips ready for bank disbursement.',
            },
          ],
        },
        {
          title: '9. Bulletproof Statutory Compliance',
          bullets: [
            {
              bold: 'PF, ESI, PT & TDS:',
              text: 'The system automatically calculates highly complex statutory deductions, generating reports ready for government filing.',
            },
          ],
        },
        {
          title: '10. Integrated Labor Costing (OpEx)',
          bullets: [
            {
              bold: 'Real-Time Cost Mapping:',
              text: 'Firstcut24 intelligently maps your labor and overtime payouts directly into your Operational Expenditure dashboard for a true picture of manufacturing costs.',
            },
          ],
        },
      ],
    },

    // 4. OpEx Dashboard
    {
      id: 'opex',
      label: 'OpEx Dashboard',
      icon: Wallet,
      badge: 'OpEx Module',
      title: 'Operational Expenditure (OpEx) Dashboard',
      description:
        'Stop waiting for month-end accountant reports to find out where your money went. Track, control, and optimize your factory’s daily running costs in real-time to fiercely protect your profit margins.',
      mockup: 'opex',
      tip: 'Track cost-per-SqM in real time · Catch budget overruns instantly · Protect your margins',
      cta: 'Explore Module',
      pillars: [
        {
          title: '1. Real-Time Expense Master View',
          bullets: [
            {
              bold: 'Unified Screen:',
              text: 'The OpEx dashboard provides a live, highly visual breakdown of all your operational expenses—from massive electricity bills down to minor petty cash payouts.',
            },
          ],
        },
        {
          title: '2. True Cost-Per-Square-Meter (SqM) Analytics',
          bullets: [
            {
              bold: 'Ultimate Performance Metric:',
              text: 'The system continuously divides your total daily running costs by your total glass output, giving owners the exact, real-time cost of producing every square meter of glass.',
            },
          ],
        },
        {
          title: '3. Integrated Labor & Overtime Costing',
          bullets: [
            {
              bold: 'HR-Linked Data:',
              text: 'The dashboard automatically pulls your live payroll data, comparing daily labor and overtime payouts directly against factory output.',
            },
          ],
        },
        {
          title: '4. Energy & Power Consumption Tracking',
          bullets: [
            {
              bold: 'Spot the Spikes:',
              text: 'Log and track heavy electricity and gas bills over time to identify sudden spikes in power usage and optimize machine idle times.',
            },
          ],
        },
        {
          title: '5. Financial Impact of Breakage (Wastage Value)',
          bullets: [
            {
              bold: 'Mistakes in Rupees:',
              text: 'The dashboard takes scrap and breakage data from the Production module and calculates the exact, real-time monetary value of the raw glass you are losing.',
            },
          ],
        },
        {
          title: '6. Machine Maintenance & Spares Expenditure',
          bullets: [
            {
              bold: 'Repair vs Replace:',
              text: 'Track exactly how much is being spent repairing specific CNC cutters, edgers, or furnaces, giving you the hard data to decide when to replace aging equipment.',
            },
          ],
        },
        {
          title: '7. Consumables Usage Monitoring',
          bullets: [
            {
              bold: 'Hidden Daily Costs:',
              text: 'Track spending trends on fast-moving factory consumables like diamond grinding wheels, polishing belts, cerium oxide powder, coolants, and silicones.',
            },
          ],
        },
        {
          title: '8. Fixed vs. Variable Overhead Categorization',
          bullets: [
            {
              bold: 'True Breakeven Point:',
              text: 'The system intelligently separates fixed costs (rent, fixed salaries, insurance) from variable costs (power, hourly wages, consumables) for clear forecasting.',
            },
          ],
        },
        {
          title: '9. Automated Budget vs. Actual Alerts',
          bullets: [
            {
              bold: 'Proactive Protection:',
              text: 'Set strict monthly budgets for departments or expense categories. The dashboard instantly triggers visual alerts if spending trends dangerously close to the limit.',
            },
          ],
        },
        {
          title: '10. Historic Expense Trendlines',
          bullets: [
            {
              bold: 'Week/Month/Year Comparison:',
              text: 'Automated period-over-period comparison charts let you monitor long-term expense trends and instantly adjust your sales pricing strategy.',
            },
          ],
        },
      ],
    },

    // 5. Production & Tracking
    {
      id: 'production',
      label: 'Production & Tracking',
      icon: Factory,
      badge: 'Production Module',
      title: 'Production & Tracking Module',
      description:
        'Transform your factory floor into a smart, transparent, and highly efficient assembly line with real-time visibility.',
      mockup: 'production',
      tip: 'Boost production efficiency by 60% · Reduce job delays · Full shop floor visibility',
      cta: 'Explore Module',
      pillars: [
        {
          title: '1. Automated Job Card Generation',
          bullets: [
            {
              bold: 'One-Click Job Cards:',
              text: 'The moment an order is released for production, Firstcut24 instantly generates detailed, error-free job cards—bridging the gap between sales and the factory floor.',
            },
          ],
        },
        {
          title: '2. Granular Piece-by-Piece Barcode Tracking',
          bullets: [
            {
              bold: 'Live Completion Status:',
              text: 'Equip your factory floor with barcode scanning to track every individual piece in real-time, giving plant heads an instant, live view of order completion.',
            },
          ],
        },
        {
          title: '3. Fully Customizable Factory Routing',
          bullets: [
            {
              bold: 'Map Your Floor:',
              text: "Create and define custom production departments tailored to your exact physical layout—Cutting, Edging, Washing, Tempering, or Lamination.",
            },
          ],
        },
        {
          title: '4. Multi-Department Workflow Scanning',
          bullets: [
            {
              bold: 'Instant Bottleneck Alerts:',
              text: 'As glass moves through the factory, operators scan pieces in and out of every department, letting you spot bottlenecks immediately.',
            },
          ],
        },
        {
          title: '5. Integrated Quality Inspection Gates',
          bullets: [
            {
              bold: 'Built-In QC Checkpoints:',
              text: 'Set mandatory quality inspection checkpoints at critical stages to ensure no scratched, chipped, or defective glass ever reaches dispatch.',
            },
          ],
        },
        {
          title: '6. End-to-End Visibility Until Dispatch',
          bullets: [
            {
              bold: 'Cut-to-Truck Tracking:',
              text: 'Experience pure, uninterrupted tracking from the moment raw float glass is cut to the second the finished product is loaded onto the delivery truck.',
            },
          ],
        },
      ],
    },

    // 6. Quotation
    {
      id: 'quotation',
      label: 'Quotation',
      icon: FileText,
      badge: 'Quotation Module',
      title: 'Smart Quotation Module: Built for the Complexities of Glass',
      description:
        'Stop losing money on miscalculated edge polishing, wrong chargeable areas, and forgotten transport fees. The Firstcut24 Quotation Module is an ultra-flexible, intelligent pricing engine designed specifically for the glass and hardware industry. Create 100% accurate, multi-item project quotes in seconds, and convert them to invoices with a single click.',
      mockup: 'quotation',
      tip: 'Calculate glass sizes, perimeters, and weights instantly. Detect Jumbo glass sizes and convert quotes to invoices with one click.',
      cta: 'Explore Module',
      pillars: [
        {
          title: '1. Total Dimensional & Pricing Freedom',
          intro: 'Your clients speak different languages when it comes to measurements. Firstcut24 understands them all.',
          bullets: [
            { bold: 'Any Measurement Unit:', text: 'Enter glass sizes seamlessly in Millimeters (mm), Inches, Meters, or Feet.' },
            { bold: 'Dynamic Pricing Models:', text: 'Price your items exactly how you sell them—per Sq.Ft, per Sq.Meter, per Piece, or even thickness-based pricing (Sq.Ft/mm or Sq.Meter/mm).' },
          ],
        },
        {
          title: '2. Error-Free Area & Polish Calculations',
          intro: "Eliminate human error from your sales team's calculators.",
          bullets: [
            { bold: 'Smart Chargeable Area Logic:', text: "Automatically calculate billing areas based on your factory's specific rules (Exact mm, Standard Round-offs, or Even Inch calculations)." },
            { bold: 'Automated Edge Polishing:', text: 'Just select the finish (Clean Polish/CP, Bevel, Half-C, Rough Grind/RG, or Full-C) and Firstcut24 automatically calculates the linear running perimeter and applies the correct rates.' },
          ],
        },
        {
          title: '3. Built-In Logistics & Jumbo Detection',
          intro: 'Never undercharge for heavy transport or oversized handling again.',
          bullets: [
            { bold: 'Instant Transport Weight:', text: 'Once you enter the glass sizes and thickness, Firstcut24 instantly calculates the total combined weight of the entire order. No more guessing for transport capacity!' },
            { bold: 'Jumbo Glass Auto-Detection:', text: 'The system automatically highlights rows if the entered glass dimensions qualify as "Jumbo" size, ensuring your team never forgets to apply oversized handling premiums.' },
          ],
        },
        {
          title: '4. Unified Project Quoting (Beyond Just Glass)',
          intro: "Don't send multiple quotes for one project. Build comprehensive, multipurpose estimates.",
          bullets: [
            { bold: 'Project-Based Quoting:', text: 'Group items logically by project or room.' },
            { bold: 'Hardware & Aluminum Ready:', text: 'Add hardware fittings, aluminum profiles, and accessories into the exact same quote alongside your glass items.' },
          ],
        },
        {
          title: '5. Seamless Add-Ons & Service Charges',
          intro: 'Your quotes need to reflect the reality of your hard work.',
          bullets: [
            { bold: 'Instant Surcharges:', text: 'Easily append extra line items for Fabrication, Designing, Handling, Transport, and Admin charges with just a few clicks. Firstcut24 tallies it all up perfectly.' },
          ],
        },
        {
          title: '6. Smart Tax & 1-Click Invoicing',
          intro: 'Close the deal and bill the client without doing the math twice.',
          bullets: [
            { bold: 'Inclusive or Exclusive Tax:', text: 'Toggle your entire quote to be Tax Inclusive or Tax Exclusive with a single button. Firstcut24 handles the reverse-math automatically.' },
            { bold: 'Auto-Tax Calculation:', text: 'GST/Tax brackets are automatically applied based on the item categories (Glass vs. Hardware vs. Services).' },
            { bold: '1-Click Quote-to-Invoice:', text: 'Once a client confirms the project, convert the entire quotation into a final Tax Invoice with zero manual data entry. Hassle-free, error-free billing.' },
          ],
        },
      ],
    },

    // 7. Sales & Purchase
    {
      id: 'sales',
      label: 'Sales & Purchase',
      icon: ShoppingCart,
      badge: 'Sales & Purchase Module',
      title: 'Sales & Purchase Management Module',
      description:
        'Gain absolute control over your cash flow. Seamlessly manage client orders, track supplier purchases, and monitor your bottom line from a single, unified command center.',
      mockup: 'sales',
      tip: 'See sales & purchases side-by-side · Auto-generate POs · Protect margins with credit checks',
      cta: 'Explore Module',
      pillars: [
        {
          title: '1. The Unified Cash Flow Dashboard',
          bullets: [
            {
              bold: 'Real-Time Money Movement:',
              text: 'The combined Sales & Purchase dashboard places daily sales revenue side-by-side with procurement expenses, giving an instant, overarching picture of daily profitability.',
            },
          ],
        },
        {
          title: '2. Seamless Quote-to-Order Conversion',
          bullets: [
            {
              bold: 'One Click, Instant Trigger:',
              text: 'Convert a confirmed client quotation directly into an active Sales Order, instantly triggering the AI Optimizer and notifying the Production floor.',
            },
          ],
        },
        {
          title: '3. Automated Purchase Order (PO) Generation',
          bullets: [
            {
              bold: 'Low-Stock Triggered POs:',
              text: 'When Inventory flags low stock for jumbo glass sheets or hardware, instantly generate and email a perfectly formatted Purchase Order to your preferred vendor.',
            },
          ],
        },
        {
          title: '4. Comprehensive Client Credit Tracking',
          bullets: [
            {
              bold: 'Bad-Debt Protection:',
              text: 'Firstcut24 actively monitors client ledgers and alerts your sales team if a customer has exceeded their credit limit or has long-pending outstandings.',
            },
          ],
        },
        {
          title: '5. Intelligent Vendor Management',
          bullets: [
            {
              bold: 'Bulletproof Supply Chain:',
              text: 'Track all your glass and hardware suppliers in one centralized database, monitoring historical pricing, delivery reliability, and material quality.',
            },
          ],
        },
        {
          title: '6. Goods Receipt Note (GRN) Automation',
          bullets: [
            {
              bold: 'Closed-Loop Procurement:',
              text: 'When a delivery truck arrives, easily generate a GRN that instantly updates live inventory counts and pushes the payable amount to Accounting.',
            },
          ],
        },
        {
          title: '7. Sales Team Performance & Target Tracking',
          bullets: [
            {
              bold: 'Targets vs Achieved:',
              text: 'Track individual sales rep targets versus actual achievements, quote-to-order conversion rates, and who is driving the most revenue.',
            },
          ],
        },
        {
          title: '8. Dynamic Discount Approval Workflows',
          bullets: [
            {
              bold: 'Auto-Approve or Escalate:',
              text: 'Standard discounts are auto-approved, while heavy price drops on large projects automatically trigger a digital approval request to the plant head or CEO.',
            },
          ],
        },
        {
          title: '9. Smart Order Fulfillment Visibility',
          bullets: [
            {
              bold: 'Accurate Delivery Timelines:',
              text: 'The sales dashboard tracks the real-time production status of every order, letting reps give clients accurate delivery timelines instantly.',
            },
          ],
        },
        {
          title: '10. Complete Digital Audit Trails',
          bullets: [
            {
              bold: 'Fully Traceable Chain:',
              text: 'Every transaction links its corresponding Quotation, Sales Order, Purchase Order, GRN, and Tax Invoice into one fully traceable digital chain.',
            },
          ],
        },
      ],
    },

    // 8. Inventory
    {
      id: 'inventory',
      label: 'Inventory',
      icon: Package,
      badge: 'Inventory Module',
      title: 'Smart Inventory Module: Total Control Over Every Sheet, Fitting, and Profile',
      description:
        'Stop losing track of expensive jumbo sheets, misplacing hardware, and halting production due to unexpected stock-outs. The Firstcut24 Inventory Module gives you absolute, real-time visibility over your entire supply chain—from the moment materials arrive at the warehouse to the moment they hit the cutting table.',
      mockup: 'inventory',
      tip: 'Eliminate stockouts · Reduce excess inventory by 40% · Full material traceability',
      cta: 'Explore Module',
      pillars: [
        {
          title: '1. Universal Dimensional Tracking for Glass',
          intro: 'Stop wasting time doing manual math to convert supplier invoices.',
          bullets: [
            {
              bold: 'Input How You Buy:',
              text: 'Log incoming glass sheets effortlessly in Millimeters (mm), Inches, Meters, or Feet. The system automatically unifies your stock counts so you always know your total area on hand.',
            },
          ],
        },
        {
          title: '2. Granular Glass Attribute Filters',
          intro: 'Never lose a specific sheet in your racks again.',
          bullets: [
            {
              bold: 'Deep Categorization:',
              text: 'Track inventory by exact Glass Type (Float, Toughened, Laminated), Thickness (4mm, 8mm, 12mm), and Color/Tint (Clear, Extra Clear, Bronze, Grey).',
            },
          ],
        },
        {
          title: '3. Unified Multi-Material Management',
          intro: 'Your business installs more than just glass. Your software should track it all.',
          bullets: [
            {
              bold: 'Beyond the Glass Rack:',
              text: 'Seamlessly add, track, and value hardware fittings, aluminum profiles, silicones, and consumable accessories in the same inventory module.',
            },
          ],
        },
        {
          title: '4. Seamless Multi-Warehouse Transfers',
          intro: 'Keep your factory floor fed without losing track of your assets.',
          bullets: [
            {
              bold: 'Instant Stock Mobility:',
              text: 'Easily transfer inventory between your main warehouse, the factory floor, or secondary branches. Firstcut24 logs every movement for total accountability.',
            },
          ],
        },
        {
          title: '5. Smart Low-Stock Alerts & Dashboard Automation',
          intro: "Never delay a client's project because you ran out of a crucial material.",
          bullets: [
            {
              bold: 'Intelligent Reordering:',
              text: 'Set custom minimum-stock thresholds for fast-moving items. Firstcut24 pushes automatic, real-time alerts when stock is low.',
            },
          ],
        },
        {
          title: '6. Barcode Ready & Precision Batch Tracking',
          intro: 'Eliminate manual stock-taking errors and messy clipboards.',
          bullets: [
            { bold: 'Barcode Integration:', text: 'Generate and scan barcodes to receive or issue materials in seconds.' },
            { bold: 'Complete Traceability:', text: "Track exactly which batch of glass or hardware was used for which project, helping you identify affected inventory instantly if a supplier quality issue arises." },
          ],
        },
      ],
    },
  ];
</script>

<!-- Module Explorer Section -->
<section id="modules" class="relative w-full bg-slate-100 py-10 sm:py-10 lg:py-10 overflow-hidden">
  <!-- Background -->
  <div class="absolute inset-0 -z-10 pointer-events-none">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-25"></div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 h-150 w-200 rounded-full bg-linear-to-b from-blue-100/30 to-transparent blur-3xl"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-14 sm:mb-16 lg:mb-20 space-y-2">


      <h2 class="text-4xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900 leading-tight font-heading">
        Explore Each Module in Detail
      </h2>

      <p class="text-sm sm:text-[15px] text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
        Click any module to see how it works, what it includes, and the business value it delivers.
      </p>
    </div>

    <!-- Explorer Layout -->
    <div class="flex flex-col lg:flex-row gap-6 lg:gap-0">

      <!-- Left Sidebar Tabs -->
      <div class="lg:w-50 shrink-0">
        <nav class="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 [-ms-overflow-style:none] [scrollbar-none] [&::-webkit-scrollbar]:hidden">
          {#each modules as mod, i (mod.id)}
            {@const TabIcon = mod.icon}
            <button
              onclick={() => selectModule(i)}
              class="flex items-center gap-2.5 px-4 py-3 rounded-xl text-left whitespace-nowrap transition-all duration-250 cursor-pointer min-w-max lg:min-w-0 lg:w-full
                {activeModule === i
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60 lg:border-0'
                }"
            >
              <TabIcon
                class="h-4 w-4 shrink-0 {activeModule === i ? 'text-white' : 'text-slate-400'}"
                strokeWidth={2}
              />
              <span class="text-[13px] font-semibold font-jakarta">{mod.label}</span>
            </button>
          {/each}
        </nav>
      </div>

      <!-- Main Content Area -->
      <div class="flex-1 lg:ml-6">
        <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          <div class="flex flex-col xl:flex-row">

            <!-- Module Detail (Left Content) -->
            <div class="flex-1 p-8 sm:p-10 xl:max-w-120">
              {#key activeModule}
                {@const DetailIcon = modules[activeModule].icon}
                <div class="animate-fade-in-up">
                  <!-- Module Badge -->
                  <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-600 mb-6">
                    <DetailIcon class="h-3.5 w-3.5" strokeWidth={2} />
                    <span class="text-xs font-semibold font-jakarta">{modules[activeModule].badge}</span>
                  </div>

                  <!-- Title -->
                  <h3 class="text-2xl sm:text-[28px] font-black text-slate-900 font-heading tracking-tight leading-snug mb-4">
                    {modules[activeModule].title}
                  </h3>

                  <!-- Description -->
                  <p class="text-[14px] text-slate-500 leading-relaxed mb-7 font-medium">
                    {modules[activeModule].description}
                  </p>

                  <!-- Accordion (same pattern for every module) -->
                  <div class="space-y-2 mb-8">
                    {#each modules[activeModule].pillars as pillar, pIndex (pillar.title)}
                      <div class="rounded-xl border border-slate-200/80 overflow-hidden bg-slate-50/50">
                        <button
                          type="button"
                          onclick={() => togglePillar(pIndex)}
                          class="w-full px-4 py-3 flex items-center justify-between text-left cursor-pointer hover:bg-slate-100/60 transition-colors"
                        >
                          <span class="text-[13px] font-semibold text-slate-800 pr-3">{pillar.title}</span>
                          <ChevronDown
                            class="h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 {openPillar === pIndex ? 'rotate-180 text-blue-600' : ''}"
                          />
                        </button>
                        {#if openPillar === pIndex}
                          <div
                            transition:slide
                            class="px-4 pb-4 pt-1 text-[12px] text-slate-500 leading-relaxed space-y-2 border-t border-slate-200/60"
                          >
                            {#if pillar.intro}
                              <p>{pillar.intro}</p>
                            {/if}
                            <ul class="space-y-1.5 pl-1">
                              {#each pillar.bullets as b (b.bold)}
                                <li class="flex items-start gap-1.5">
                                  <span class="text-blue-500 mt-0.5">•</span>
                                  <span><strong class="text-slate-700">{b.bold}</strong> {b.text}</span>
                                </li>
                              {/each}
                            </ul>
                          </div>
                        {/if}
                      </div>
                    {/each}
                  </div>

                  <!-- Tip Bar -->
                  <div class="flex items-start gap-3 px-4 py-3.5 bg-blue-50/60 border-l-[3px] border-blue-500 rounded-r-lg mb-8">
                    <Sparkles class="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <p class="text-[12.5px] text-blue-700 font-medium leading-relaxed">
                      {modules[activeModule].tip}
                    </p>
                  </div>

                  <!-- CTA Button -->
                  <button
                    type="button"
                    class="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/20 transition-all duration-200 cursor-default opacity-90"
                  >
                    <span>{modules[activeModule].cta}</span>
                  </button>
                </div>
              {/key}
            </div>

            <!-- Module Mockup (Right Side) -->
            <div class="flex-1 xl:max-w-130 bg-slate-50/50 border-t xl:border-t-0 xl:border-l border-slate-200/60 p-4 sm:p-6 flex items-start justify-center overflow-hidden">
              {#key activeModule}
                <div class="animate-mockup-slide w-full">

                  <!-- Quotation Mockup -->
                  {#if modules[activeModule].mockup === 'quotation'}
                    <div class="w-full bg-white rounded-xl shadow-lg shadow-slate-200/60 border border-slate-200/60 overflow-hidden text-[11px] transform scale-[0.92] origin-top">
                      <div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
                        <Search class="h-3 w-3 text-slate-400" />
                        <span class="text-slate-400 text-[10px]">Search anything...</span>
                      </div>
                      <div class="px-4 py-2 border-b border-slate-100 flex items-center gap-1.5 text-[10px] text-slate-400">
                        <span>...</span>
                        <ChevronRight class="h-2.5 w-2.5" />
                        <span class="text-slate-600 font-medium">New Quotation</span>
                      </div>
                      <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <h4 class="font-bold text-slate-800 text-sm">New Quotation</h4>
                        <span class="text-slate-400 text-[10px] cursor-pointer hover:text-slate-600">Cancel</span>
                      </div>
                      <div class="grid grid-cols-2 divide-x divide-slate-100">
                        <div class="p-4 space-y-3">
                          <div class="text-[10px] font-semibold text-slate-500 mb-2">Client Details</div>
                          <div class="space-y-2">
                            <div class="flex items-center gap-2 px-2.5 py-1.5 bg-slate-50 rounded-md border border-slate-200/60">
                              <User class="h-3 w-3 text-slate-400" />
                              <span class="text-slate-600">Future Tech Solutions Pvt. Ltd.</span>
                            </div>
                            <div class="flex items-center gap-2 px-2.5 py-1.5 bg-slate-50 rounded-md border border-slate-200/60">
                              <User class="h-3 w-3 text-slate-400" />
                              <span class="text-slate-600">Rahul Sharma</span>
                            </div>
                            <div class="flex items-center gap-2 px-2.5 py-1.5 bg-slate-50 rounded-md border border-slate-200/60 overflow-hidden min-w-0">
                              <Mail class="h-3 w-3 text-slate-400 shrink-0" />
                              <span class="text-slate-500 truncate min-w-0">rahul.sharma@futuretech.com</span>
                            </div>
                            <div class="flex items-center gap-2 px-2.5 py-1.5 bg-slate-50 rounded-md border border-slate-200/60">
                              <Phone class="h-3 w-3 text-slate-400" />
                              <span class="text-slate-500">+91 98765 43210</span>
                            </div>
                          </div>
                        </div>
                        <div class="p-4 space-y-3">
                          <div class="text-[10px] font-semibold text-slate-500 mb-2">Quotation Details</div>
                          <div class="space-y-2">
                            <div class="flex items-center justify-between text-[10px]">
                              <span class="text-slate-500">Quotation No. *</span>
                              <span class="font-mono text-slate-700 font-medium">QUO/24-25/00125</span>
                            </div>
                            <div class="flex items-center justify-between text-[10px]">
                              <span class="text-slate-500">Valid Till *</span>
                              <span class="text-slate-700 font-medium">23/06/2024</span>
                            </div>
                            <div class="flex items-center justify-between text-[10px]">
                              <span class="text-slate-500">Currency</span>
                              <span class="text-slate-700 font-medium">INR - Indian Rupee</span>
                            </div>
                            <div class="flex items-center justify-between text-[10px]">
                              <span class="text-slate-500">Sales Executive</span>
                              <span class="text-slate-700 font-medium">Arjun Mehta</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mx-4 border border-slate-200 rounded-lg overflow-hidden mb-3">
                        <div class="bg-slate-700 text-white px-3 py-2 grid grid-cols-7 gap-1 text-[9px] font-semibold">
                          <span class="col-span-2">Item Name</span>
                          <span>HSN/SAC</span>
                          <span>Qty</span>
                          <span>Rate (₹)</span>
                          <span>Disc</span>
                          <span>Amount (₹)</span>
                        </div>
                        <div class="divide-y divide-slate-100">
                          <div class="px-3 py-2 grid grid-cols-7 gap-1 text-[9.5px]">
                            <span class="col-span-2 text-slate-700 font-medium">Wireless Mouse</span>
                            <span class="text-slate-500">84716060</span>
                            <span class="text-slate-600">10</span>
                            <span class="text-slate-600">450.00</span>
                            <span class="text-slate-500">0.00</span>
                            <span class="text-slate-800 font-semibold">4,500.00</span>
                          </div>
                          <div class="px-3 py-2 grid grid-cols-7 gap-1 text-[9.5px] bg-blue-50/30">
                            <span class="col-span-2 text-slate-700 font-medium">Wireless Keyboard</span>
                            <span class="text-slate-500">84716060</span>
                            <span class="text-slate-600">10</span>
                            <span class="text-slate-600">900.00</span>
                            <span class="text-blue-600">5.00%</span>
                            <span class="text-slate-800 font-semibold">8,550.00</span>
                          </div>
                          <div class="px-3 py-2 grid grid-cols-7 gap-1 text-[9.5px]">
                            <span class="col-span-2 text-slate-700 font-medium">USB-C Hub</span>
                            <span class="text-slate-500">84718090</span>
                            <span class="text-slate-600">5</span>
                            <span class="text-slate-600">1,200.00</span>
                            <span class="text-slate-500">0.00</span>
                            <span class="text-slate-800 font-semibold">6,000.00</span>
                          </div>
                        </div>
                      </div>
                      <div class="px-4 py-3 border-t border-slate-100 grid grid-cols-2 gap-4">
                        <div>
                          <div class="text-[9px] font-semibold text-slate-500 mb-1.5">Terms & Conditions</div>
                          <div class="text-[8.5px] text-slate-400 space-y-0.5 leading-relaxed">
                            <p>1. Prices are inclusive of all applicable taxes.</p>
                            <p>2. Payment Terms: 100% Advance.</p>
                            <p>3. Delivery: 7-10 working days.</p>
                            <p>4. Warranty: 1 Year against defects.</p>
                          </div>
                        </div>
                        <div class="text-right space-y-1">
                          <div class="flex justify-between text-[9.5px]">
                            <span class="text-slate-400">Subtotal</span>
                            <span class="text-slate-700 font-medium">₹19,050.00</span>
                          </div>
                          <div class="flex justify-between text-[9.5px]">
                            <span class="text-slate-400">GST (18%)</span>
                            <span class="text-slate-700 font-medium">₹3,429.00</span>
                          </div>
                          <div class="flex justify-between text-[10px] font-bold border-t border-slate-200 pt-1 mt-1">
                            <span class="text-slate-600">Grand Total</span>
                            <span class="text-emerald-600">₹22,479.00</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  <!-- Inventory Mockup -->
                  {:else if modules[activeModule].mockup === 'inventory'}
                    <div class="w-full bg-white rounded-xl shadow-lg shadow-slate-200/60 border border-slate-200/60 overflow-hidden text-[11px] transform scale-[0.92] origin-top">
                      <div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
                        <Search class="h-3 w-3 text-slate-400" />
                        <span class="text-slate-400 text-[10px]">Search inventory...</span>
                      </div>
                      <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <h4 class="font-bold text-slate-800 text-sm">Stock Overview</h4>
                        <div class="flex gap-2">
                          <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-md text-[9px] font-semibold">In Stock: 1,245</span>
                          <span class="px-2 py-1 bg-amber-50 text-amber-700 rounded-md text-[9px] font-semibold">Low: 23</span>
                          <span class="px-2 py-1 bg-red-50 text-red-600 rounded-md text-[9px] font-semibold">Out: 5</span>
                        </div>
                      </div>
                      <div class="mx-4 mt-3 border border-slate-200 rounded-lg overflow-hidden mb-3">
                        <div class="bg-slate-700 text-white px-3 py-2 grid grid-cols-6 gap-1 text-[9px] font-semibold">
                          <span class="col-span-2">Material</span>
                          <span>Category</span>
                          <span>In Stock</span>
                          <span>Min Qty</span>
                          <span>Status</span>
                        </div>
                        <div class="divide-y divide-slate-100">
                          <div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center">
                            <span class="col-span-2 text-slate-700 font-medium">Clear Float Glass 5mm</span>
                            <span class="text-slate-500">Glass</span>
                            <span class="text-slate-600 font-medium">450 sqft</span>
                            <span class="text-slate-500">100 sqft</span>
                            <span class="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[8px] font-semibold w-fit">In Stock</span>
                          </div>
                          <div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center bg-amber-50/30">
                            <span class="col-span-2 text-slate-700 font-medium">Toughened Glass 8mm</span>
                            <span class="text-slate-500">Glass</span>
                            <span class="text-amber-600 font-semibold">45 sqft</span>
                            <span class="text-slate-500">50 sqft</span>
                            <span class="px-1.5 py-0.5 bg-amber-50 text-amber-700 rounded text-[8px] font-semibold w-fit">Low Stock</span>
                          </div>
                          <div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center">
                            <span class="col-span-2 text-slate-700 font-medium">Aluminium Profile 40mm</span>
                            <span class="text-slate-500">Hardware</span>
                            <span class="text-slate-600 font-medium">320 pcs</span>
                            <span class="text-slate-500">50 pcs</span>
                            <span class="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[8px] font-semibold w-fit">In Stock</span>
                          </div>
                          <div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center bg-red-50/20">
                            <span class="col-span-2 text-slate-700 font-medium">Mirror Glass 4mm</span>
                            <span class="text-slate-500">Glass</span>
                            <span class="text-red-600 font-semibold">0 sqft</span>
                            <span class="text-slate-500">80 sqft</span>
                            <span class="px-1.5 py-0.5 bg-red-50 text-red-600 rounded text-[8px] font-semibold w-fit">Out of Stock</span>
                          </div>
                          <div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center">
                            <span class="col-span-2 text-slate-700 font-medium">Silicone Sealant</span>
                            <span class="text-slate-500">Consumable</span>
                            <span class="text-slate-600 font-medium">125 tubes</span>
                            <span class="text-slate-500">20 tubes</span>
                            <span class="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[8px] font-semibold w-fit">In Stock</span>
                          </div>
                        </div>
                      </div>
                      <div class="px-4 py-3 border-t border-slate-100 flex items-center justify-between">
                        <span class="text-[9px] text-slate-400">Last synced: 2 min ago</span>
                        <button class="px-3 py-1.5 bg-blue-600 text-white rounded-md text-[9px] font-semibold">+ Add Stock</button>
                      </div>
                    </div>

                  <!-- Production Mockup -->
                  {:else if modules[activeModule].mockup === 'production'}
                    <div class="w-full bg-white rounded-xl shadow-lg shadow-slate-200/60 border border-slate-200/60 overflow-hidden text-[11px] transform scale-[0.92] origin-top">
                      <div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
                        <Search class="h-3 w-3 text-slate-400" />
                        <span class="text-slate-400 text-[10px]">Search jobs...</span>
                      </div>
                      <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <h4 class="font-bold text-slate-800 text-sm">Production Board</h4>
                        <div class="flex gap-2">
                          <span class="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-[9px] font-semibold">Active: 12</span>
                          <span class="px-2 py-1 bg-amber-50 text-amber-700 rounded-md text-[9px] font-semibold">Pending: 8</span>
                        </div>
                      </div>
                      <div class="p-4 grid grid-cols-3 gap-3">
                        <div class="space-y-2">
                          <div class="text-[9px] font-bold text-amber-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <div class="w-2 h-2 rounded-full bg-amber-400"></div> Pending
                          </div>
                          <div class="bg-amber-50/60 border border-amber-200/50 rounded-lg p-2.5 space-y-1.5">
                            <div class="text-[9.5px] font-semibold text-slate-700">JOB-0456</div>
                            <div class="text-[8.5px] text-slate-500">Clear Glass 5mm × 12 pcs</div>
                            <div class="flex items-center gap-1.5 mt-1">
                              <div class="w-4 h-4 rounded-full bg-slate-300"></div>
                              <span class="text-[8px] text-slate-400">Unassigned</span>
                            </div>
                          </div>
                          <div class="bg-amber-50/60 border border-amber-200/50 rounded-lg p-2.5 space-y-1.5">
                            <div class="text-[9.5px] font-semibold text-slate-700">JOB-0457</div>
                            <div class="text-[8.5px] text-slate-500">Toughened 8mm × 6 pcs</div>
                            <div class="flex items-center gap-1.5 mt-1">
                              <div class="w-4 h-4 rounded-full bg-slate-300"></div>
                              <span class="text-[8px] text-slate-400">Unassigned</span>
                            </div>
                          </div>
                        </div>
                        <div class="space-y-2">
                          <div class="text-[9px] font-bold text-blue-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <div class="w-2 h-2 rounded-full bg-blue-400"></div> In Progress
                          </div>
                          <div class="bg-blue-50/60 border border-blue-200/50 rounded-lg p-2.5 space-y-1.5">
                            <div class="text-[9.5px] font-semibold text-slate-700">JOB-0453</div>
                            <div class="text-[8.5px] text-slate-500">Laminated Glass × 8 pcs</div>
                            <div class="flex items-center gap-1.5 mt-1">
                              <div class="w-4 h-4 rounded-full bg-blue-400"></div>
                              <span class="text-[8px] text-slate-600 font-medium">Ramesh K.</span>
                            </div>
                            <div class="w-full bg-slate-200 rounded-full h-1 mt-1.5">
                              <div class="bg-blue-500 h-1 rounded-full" style="width: 65%"></div>
                            </div>
                          </div>
                          <div class="bg-blue-50/60 border border-blue-200/50 rounded-lg p-2.5 space-y-1.5">
                            <div class="text-[9.5px] font-semibold text-slate-700">JOB-0454</div>
                            <div class="text-[8.5px] text-slate-500">Mirror Cut × 4 pcs</div>
                            <div class="flex items-center gap-1.5 mt-1">
                              <div class="w-4 h-4 rounded-full bg-emerald-400"></div>
                              <span class="text-[8px] text-slate-600 font-medium">Sunil P.</span>
                            </div>
                            <div class="w-full bg-slate-200 rounded-full h-1 mt-1.5">
                              <div class="bg-blue-500 h-1 rounded-full" style="width: 30%"></div>
                            </div>
                          </div>
                        </div>
                        <div class="space-y-2">
                          <div class="text-[9px] font-bold text-emerald-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <div class="w-2 h-2 rounded-full bg-emerald-400"></div> Completed
                          </div>
                          <div class="bg-emerald-50/60 border border-emerald-200/50 rounded-lg p-2.5 space-y-1.5">
                            <div class="text-[9.5px] font-semibold text-slate-700">JOB-0450</div>
                            <div class="text-[8.5px] text-slate-500">Clear Glass 4mm × 20 pcs</div>
                            <div class="flex items-center justify-between mt-1">
                              <span class="text-[8px] text-emerald-600 font-semibold">✓ Complete</span>
                            </div>
                          </div>
                          <div class="bg-emerald-50/60 border border-emerald-200/50 rounded-lg p-2.5 space-y-1.5">
                            <div class="text-[9.5px] font-semibold text-slate-700">JOB-0451</div>
                            <div class="text-[8.5px] text-slate-500">Frosted Glass × 10 pcs</div>
                            <div class="flex items-center justify-between mt-1">
                              <span class="text-[8px] text-emerald-600 font-semibold">✓ Complete</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  <!-- Optimizer Mockup -->
                  {:else if modules[activeModule].mockup === 'optimizer'}
                    <div class="w-full bg-white rounded-xl shadow-lg shadow-slate-200/60 border border-slate-200/60 overflow-hidden text-[11px] transform scale-[0.92] origin-top">
                      <div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
                        <Search class="h-3 w-3 text-slate-400" />
                        <span class="text-slate-400 text-[10px]">Glass optimizer...</span>
                      </div>
                      <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <h4 class="font-bold text-slate-800 text-sm">Cutting Layout - Sheet #42</h4>
                        <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-md text-[9px] font-semibold">Yield: 94.2%</span>
                      </div>
                      <div class="p-4">
                        <div class="bg-sky-50 border-2 border-sky-300 rounded-lg p-3 relative" style="aspect-ratio: 16/10;">
                          <div class="grid grid-cols-4 grid-rows-3 gap-1 h-full">
                            <div class="col-span-2 row-span-2 bg-blue-200 border border-blue-400 rounded flex items-center justify-center text-[8px] font-bold text-blue-800">A1 — 800×600</div>
                            <div class="bg-emerald-200 border border-emerald-400 rounded flex items-center justify-center text-[8px] font-bold text-emerald-800">B1</div>
                            <div class="bg-amber-200 border border-amber-400 rounded flex items-center justify-center text-[8px] font-bold text-amber-800">C1</div>
                            <div class="bg-purple-200 border border-purple-400 rounded flex items-center justify-center text-[8px] font-bold text-purple-800">B2</div>
                            <div class="bg-rose-200 border border-rose-400 rounded flex items-center justify-center text-[8px] font-bold text-rose-800">C2</div>
                            <div class="col-span-2 bg-indigo-200 border border-indigo-400 rounded flex items-center justify-center text-[8px] font-bold text-indigo-800">D1 — 400×300</div>
                            <div class="bg-teal-200 border border-teal-400 rounded flex items-center justify-center text-[8px] font-bold text-teal-800">E1</div>
                            <div class="bg-slate-200 border border-slate-400 rounded flex items-center justify-center text-[7px] text-slate-500 italic">Scrap</div>
                          </div>
                        </div>
                        <div class="grid grid-cols-3 gap-3 mt-4">
                          <div class="bg-slate-50 rounded-lg p-2.5 text-center border border-slate-200/60">
                            <div class="text-[16px] font-black text-emerald-600">94.2%</div>
                            <div class="text-[8px] text-slate-500 font-medium">Yield Rate</div>
                          </div>
                          <div class="bg-slate-50 rounded-lg p-2.5 text-center border border-slate-200/60">
                            <div class="text-[16px] font-black text-blue-600">7</div>
                            <div class="text-[8px] text-slate-500 font-medium">Pieces Cut</div>
                          </div>
                          <div class="bg-slate-50 rounded-lg p-2.5 text-center border border-slate-200/60">
                            <div class="text-[16px] font-black text-amber-600">5.8%</div>
                            <div class="text-[8px] text-slate-500 font-medium">Scrap</div>
                          </div>
                        </div>
                        <div class="mt-3 flex items-center justify-between px-1">
                          <span class="text-[8.5px] text-slate-400">AI running in background · Order #SO-1182</span>
                          <span class="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-[8px] font-semibold">Ready for Production</span>
                        </div>
                      </div>
                    </div>

                  <!-- Accounts Mockup -->
                  {:else if modules[activeModule].mockup === 'accounts'}
                    <div class="w-full bg-white rounded-xl shadow-lg shadow-slate-200/60 border border-slate-200/60 overflow-hidden text-[11px] transform scale-[0.92] origin-top">
                      <div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
                        <Search class="h-3 w-3 text-slate-400" />
                        <span class="text-slate-400 text-[10px]">Search accounts...</span>
                      </div>
                      <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <h4 class="font-bold text-slate-800 text-sm">Profit & Loss Statement</h4>
                        <span class="text-[9px] text-slate-400 font-medium">FY 2024-25 | April - June</span>
                      </div>
                      <div class="p-4 space-y-3">
                        <div class="bg-emerald-50/50 rounded-lg p-3 border border-emerald-200/40">
                          <div class="text-[9px] font-bold text-emerald-700 uppercase tracking-wider mb-2">Revenue</div>
                          <div class="space-y-1.5">
                            <div class="flex justify-between text-[10px]">
                              <span class="text-slate-600">Sales Revenue</span>
                              <span class="text-emerald-700 font-semibold">₹24,56,000</span>
                            </div>
                            <div class="flex justify-between text-[10px]">
                              <span class="text-slate-600">Service Income</span>
                              <span class="text-emerald-700 font-semibold">₹3,82,000</span>
                            </div>
                            <div class="flex justify-between text-[10.5px] font-bold border-t border-emerald-200/50 pt-1.5 mt-1">
                              <span class="text-slate-800">Total Revenue</span>
                              <span class="text-emerald-700">₹28,38,000</span>
                            </div>
                          </div>
                        </div>
                        <div class="bg-rose-50/50 rounded-lg p-3 border border-rose-200/40">
                          <div class="text-[9px] font-bold text-rose-700 uppercase tracking-wider mb-2">Expenses</div>
                          <div class="space-y-1.5">
                            <div class="flex justify-between text-[10px]">
                              <span class="text-slate-600">Raw Materials</span>
                              <span class="text-rose-600 font-semibold">₹12,45,000</span>
                            </div>
                            <div class="flex justify-between text-[10px]">
                              <span class="text-slate-600">Labour Cost</span>
                              <span class="text-rose-600 font-semibold">₹4,20,000</span>
                            </div>
                            <div class="flex justify-between text-[10px]">
                              <span class="text-slate-600">Overhead & Admin</span>
                              <span class="text-rose-600 font-semibold">₹2,85,000</span>
                            </div>
                            <div class="flex justify-between text-[10.5px] font-bold border-t border-rose-200/50 pt-1.5 mt-1">
                              <span class="text-slate-800">Total Expenses</span>
                              <span class="text-rose-600">₹19,50,000</span>
                            </div>
                          </div>
                        </div>
                        <div class="bg-blue-50 rounded-lg p-3 border border-blue-200/40 flex justify-between items-center">
                          <span class="text-[11px] font-bold text-slate-800">Net Profit</span>
                          <div class="text-right">
                            <span class="text-lg font-black text-blue-700">₹8,88,000</span>
                            <div class="text-[8px] text-emerald-600 font-semibold">↑ 12.4% vs last quarter</div>
                          </div>
                        </div>
                      </div>
                    </div>

                  <!-- HR Mockup -->
                  {:else if modules[activeModule].mockup === 'hr'}
                    <div class="w-full bg-white rounded-xl shadow-lg shadow-slate-200/60 border border-slate-200/60 overflow-hidden text-[11px] transform scale-[0.92] origin-top">
                      <div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
                        <Search class="h-3 w-3 text-slate-400" />
                        <span class="text-slate-400 text-[10px]">Search employees...</span>
                      </div>
                      <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <h4 class="font-bold text-slate-800 text-sm">Payroll - June 2024</h4>
                        <div class="flex gap-2">
                          <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-md text-[9px] font-semibold">Processed: 42</span>
                          <span class="px-2 py-1 bg-amber-50 text-amber-700 rounded-md text-[9px] font-semibold">Pending: 6</span>
                        </div>
                      </div>
                      <div class="mx-4 mt-3 border border-slate-200 rounded-lg overflow-hidden mb-3">
                        <div class="bg-slate-700 text-white px-3 py-2 grid grid-cols-6 gap-1 text-[9px] font-semibold">
                          <span class="col-span-2">Employee</span>
                          <span>Dept</span>
                          <span>Days</span>
                          <span>Gross (₹)</span>
                          <span>Net (₹)</span>
                        </div>
                        <div class="divide-y divide-slate-100">
                          <div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center">
                            <div class="col-span-2 flex items-center gap-2">
                              <div class="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[8px] font-bold text-blue-600">RS</div>
                              <span class="text-slate-700 font-medium">Rajesh Singh</span>
                            </div>
                            <span class="text-slate-500">Production</span>
                            <span class="text-slate-600">26</span>
                            <span class="text-slate-600">28,000</span>
                            <span class="text-emerald-600 font-semibold">24,650</span>
                          </div>
                          <div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center bg-slate-50/50">
                            <div class="col-span-2 flex items-center gap-2">
                              <div class="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-[8px] font-bold text-purple-600">PM</div>
                              <span class="text-slate-700 font-medium">Priya Mehta</span>
                            </div>
                            <span class="text-slate-500">Accounts</span>
                            <span class="text-slate-600">24</span>
                            <span class="text-slate-600">35,000</span>
                            <span class="text-emerald-600 font-semibold">30,240</span>
                          </div>
                          <div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center">
                            <div class="col-span-2 flex items-center gap-2">
                              <div class="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-[8px] font-bold text-amber-600">AK</div>
                              <span class="text-slate-700 font-medium">Amit Kumar</span>
                            </div>
                            <span class="text-slate-500">Sales</span>
                            <span class="text-slate-600">25</span>
                            <span class="text-slate-600">32,000</span>
                            <span class="text-emerald-600 font-semibold">27,880</span>
                          </div>
                          <div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center bg-slate-50/50">
                            <div class="col-span-2 flex items-center gap-2">
                              <div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[8px] font-bold text-emerald-600">SK</div>
                              <span class="text-slate-700 font-medium">Sunita Kumari</span>
                            </div>
                            <span class="text-slate-500">HR</span>
                            <span class="text-slate-600">26</span>
                            <span class="text-slate-600">30,000</span>
                            <span class="text-emerald-600 font-semibold">26,100</span>
                          </div>
                        </div>
                      </div>
                      <div class="px-4 py-3 border-t border-slate-100 flex items-center justify-between">
                        <span class="text-[9px] text-slate-400">Total Payroll: ₹12,45,000</span>
                        <button class="px-3 py-1.5 bg-blue-600 text-white rounded-md text-[9px] font-semibold">Process All</button>
                      </div>
                    </div>

                  <!-- OpEx Mockup -->
                  {:else if modules[activeModule].mockup === 'opex'}
                    <div class="w-full bg-white rounded-xl shadow-lg shadow-slate-200/60 border border-slate-200/60 overflow-hidden text-[11px] transform scale-[0.92] origin-top">
                      <div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
                        <Search class="h-3 w-3 text-slate-400" />
                        <span class="text-slate-400 text-[10px]">Search expenses...</span>
                      </div>
                      <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <h4 class="font-bold text-slate-800 text-sm">OpEx Overview</h4>
                        <span class="text-[9px] text-slate-400 font-medium">June 2024</span>
                      </div>
                      <div class="p-4 space-y-4">
                        <div class="grid grid-cols-3 gap-3">
                          <div class="bg-blue-50 rounded-lg p-3 text-center border border-blue-200/40">
                            <div class="text-[15px] font-black text-blue-700">₹19.5L</div>
                            <div class="text-[8px] text-slate-500 font-medium">Total OpEx</div>
                          </div>
                          <div class="bg-emerald-50 rounded-lg p-3 text-center border border-emerald-200/40">
                            <div class="text-[15px] font-black text-emerald-700">₹142</div>
                            <div class="text-[8px] text-slate-500 font-medium">Cost / SqM</div>
                          </div>
                          <div class="bg-rose-50 rounded-lg p-3 text-center border border-rose-200/40">
                            <div class="text-[15px] font-black text-rose-600">₹38K</div>
                            <div class="text-[8px] text-slate-500 font-medium">Breakage Loss</div>
                          </div>
                        </div>
                        <div class="bg-slate-50 rounded-lg p-3 border border-slate-200/40">
                          <div class="text-[9px] font-bold text-slate-600 mb-2">Expense Breakdown</div>
                          <div class="space-y-2">
                            <div class="flex items-center gap-2">
                              <div class="flex-1 bg-slate-200 rounded-full h-2"><div class="bg-blue-500 h-2 rounded-full" style="width: 64%"></div></div>
                              <span class="text-[8px] text-slate-600 font-medium w-28 text-right">Raw Material ₹12.4L</span>
                            </div>
                            <div class="flex items-center gap-2">
                              <div class="flex-1 bg-slate-200 rounded-full h-2"><div class="bg-amber-500 h-2 rounded-full" style="width: 22%"></div></div>
                              <span class="text-[8px] text-slate-600 font-medium w-28 text-right">Labour ₹4.2L</span>
                            </div>
                            <div class="flex items-center gap-2">
                              <div class="flex-1 bg-slate-200 rounded-full h-2"><div class="bg-purple-500 h-2 rounded-full" style="width: 10%"></div></div>
                              <span class="text-[8px] text-slate-600 font-medium w-28 text-right">Power ₹1.9L</span>
                            </div>
                            <div class="flex items-center gap-2">
                              <div class="flex-1 bg-slate-200 rounded-full h-2"><div class="bg-rose-500 h-2 rounded-full" style="width: 8%"></div></div>
                              <span class="text-[8px] text-slate-600 font-medium w-28 text-right">Consumables ₹1.0L</span>
                            </div>
                          </div>
                        </div>
                        <div class="bg-amber-50 border border-amber-200/50 rounded-lg p-2.5 flex items-center justify-between">
                          <span class="text-[9px] font-semibold text-amber-700">⚠ Power budget 92% utilized</span>
                          <span class="text-[8px] text-amber-600 font-medium">View Detail</span>
                        </div>
                      </div>
                    </div>

                  <!-- Sales & Purchase Mockup -->
                  {:else if modules[activeModule].mockup === 'sales'}
                    <div class="w-full bg-white rounded-xl shadow-lg shadow-slate-200/60 border border-slate-200/60 overflow-hidden text-[11px] transform scale-[0.92] origin-top">
                      <div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
                        <Search class="h-3 w-3 text-slate-400" />
                        <span class="text-slate-400 text-[10px]">Search orders...</span>
                      </div>
                      <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <h4 class="font-bold text-slate-800 text-sm">Sales & Purchase Dashboard</h4>
                        <span class="text-[9px] text-slate-400 font-medium">This Month</span>
                      </div>
                      <div class="p-4 space-y-3">
                        <div class="grid grid-cols-2 gap-3">
                          <div class="bg-emerald-50/50 rounded-lg p-3 border border-emerald-200/40">
                            <div class="text-[9px] font-bold text-emerald-700 uppercase tracking-wider mb-1">Sales</div>
                            <div class="text-[16px] font-black text-emerald-700">₹18.5L</div>
                            <div class="text-[8px] text-slate-500">156 orders</div>
                          </div>
                          <div class="bg-rose-50/50 rounded-lg p-3 border border-rose-200/40">
                            <div class="text-[9px] font-bold text-rose-700 uppercase tracking-wider mb-1">Purchases</div>
                            <div class="text-[16px] font-black text-rose-600">₹9.2L</div>
                            <div class="text-[8px] text-slate-500">34 POs</div>
                          </div>
                        </div>
                        <div class="border border-slate-200 rounded-lg overflow-hidden">
                          <div class="bg-slate-700 text-white px-3 py-2 grid grid-cols-5 gap-1 text-[9px] font-semibold">
                            <span class="col-span-2">Client / Vendor</span>
                            <span>Type</span>
                            <span>Amount</span>
                            <span>Status</span>
                          </div>
                          <div class="divide-y divide-slate-100">
                            <div class="px-3 py-2 grid grid-cols-5 gap-1 text-[9.5px] items-center">
                              <span class="col-span-2 text-slate-700 font-medium">Future Tech Pvt Ltd</span>
                              <span class="text-slate-500">Sale</span>
                              <span class="text-slate-700">₹4,20,000</span>
                              <span class="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[8px] font-semibold w-fit">Confirmed</span>
                            </div>
                            <div class="px-3 py-2 grid grid-cols-5 gap-1 text-[9.5px] items-center bg-slate-50/40">
                              <span class="col-span-2 text-slate-700 font-medium">AGC Glass Suppliers</span>
                              <span class="text-slate-500">Purchase</span>
                              <span class="text-slate-700">₹2,80,000</span>
                              <span class="px-1.5 py-0.5 bg-amber-50 text-amber-700 rounded text-[8px] font-semibold w-fit">Pending GRN</span>
                            </div>
                            <div class="px-3 py-2 grid grid-cols-5 gap-1 text-[9.5px] items-center">
                              <span class="col-span-2 text-slate-700 font-medium">BuildRight Interiors</span>
                              <span class="text-slate-500">Sale</span>
                              <span class="text-slate-700">₹2,60,000</span>
                              <span class="px-1.5 py-0.5 bg-red-50 text-red-600 rounded text-[8px] font-semibold w-fit">Credit Hold</span>
                            </div>
                          </div>
                        </div>
                        <button class="w-full px-3 py-2 bg-blue-600 text-white rounded-md text-[9px] font-semibold">+ New Purchase Order</button>
                      </div>
                    </div>

                  {/if}
                </div>
              {/key}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>