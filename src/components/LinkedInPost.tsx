
export function LinkedInPost() {
  const postContent = `🚀 How I Built My Product Portfolio: From Zero to PM-Ready

After 6 months of focused effort, here's my tactical approach to creating a portfolio that demonstrates real PM skills:

📊 THE FOUNDATION
• Started with Relevel's structured case studies (9 total)
• Covered PRDs, growth strategy, user research, roadmap prioritization
• Built muscle memory for PM frameworks and thinking patterns

🎯 THE BREAKTHROUGH PROJECT
• Tackled HealthifyMe's funnel optimization challenge
• Real dataset: coach bookings, conversion rates, user segments
• Applied data segmentation, cohort analysis, and resource allocation modeling
• Result: 2-3x efficiency insights between Bot vs Free-Trial funnels

🛠️ MY PROCESS
1. Problem First: Start with messy, real-world datasets
2. Segment Deep: Don't just analyze—understand user behavior patterns
3. Actionable Insights: Every analysis must lead to implementable recommendations
4. Document Everything: Notebooks, spreadsheets, writeups for credibility

💡 WHAT I DEMONSTRATED
• Analytical rigor: Moving beyond surface-level metrics
• Product intuition: Balancing user experience with business needs
• Strategic thinking: Resource allocation and growth optimization
• Technical bridge: Connecting data insights to product decisions

🔑 KEY LEARNINGS
• Mock real scenarios, use actual data structures
• Show your thinking process, not just final answers
• Link every insight to user impact and business value
• Quality over quantity—one deep case study > 10 shallow ones

Building a PM portfolio isn't about perfect solutions. It's about demonstrating how you think through complex problems and turn insights into action.

What's your approach to showcasing PM skills? 

#ProductManagement #Portfolio #DataAnalysis #ProductStrategy`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(postContent);
      alert('LinkedIn post copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy to clipboard. Please copy manually.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        📝 LinkedIn Post: Building a Product Portfolio
      </h3>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-4 whitespace-pre-line text-sm font-mono text-gray-700 max-h-96 overflow-y-auto">
        {postContent}
      </div>
      
      <div className="flex gap-3">
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-semibold"
        >
          📋 Copy to Clipboard
        </button>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors text-sm font-semibold"
        >
          🚀 Post on LinkedIn
        </a>
      </div>
      
      <p className="text-xs text-gray-500 mt-3">
        Copy the content above and paste it into your LinkedIn post. Feel free to modify as needed!
      </p>
    </div>
  );
}
