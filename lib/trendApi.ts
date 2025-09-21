import googleTrends from 'google-trends-api';

export async function getTrends(keyword: string) {
  
  try {
    // শেষ 12 মাসের সময়
    const endTime = new Date();
    const startTime = new Date();
    startTime.setFullYear(endTime.getFullYear() - 1);

    const results = await googleTrends.interestOverTime({
      keyword,
      geo: '', // global
      startTime,
      endTime,
    });

    const data = JSON.parse(results);
  
    const timeline = data.default.timelineData;

    if (!timeline || timeline.length === 0) return { keyword, score: 'Low', average: 0 };

    // numeric average হিসাব করা
    const total = timeline.reduce((sum: number, item: any) => sum + item.value[0], 0);
    const average = Math.round(total / timeline.length);

    // High/Medium/Low স্কোর
    const score = average > 70 ? 'High' : average > 40 ? 'Medium' : 'Low';

    return {
      keyword,
      average,
      score,
      
    };
  } catch (err) {
    console.error('Error fetching trends:', err);
    return { keyword, score: 'Low', average: 0, trendDetails: [] };
  }
}
