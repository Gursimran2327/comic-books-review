import sampleData from '../../sample-reviews.json';

export async function getComics() {
  // Return sample data instead of fetching from Sanity
  return sampleData.reviews.map(review => ({
    _id: review.title.toLowerCase().replace(/\s+/g, '-'),
    title: review.title,
    slug: { current: review.title.toLowerCase().replace(/\s+/g, '-') },
    publishedAt: review.publishedAt,
    rating: review.rating,
    summary: review.summary,
    review: review.review
  }));
}

export async function getComic(slug: string) {
  // Find the specific review from sample data
  const review = sampleData.reviews.find(
    r => r.title.toLowerCase().replace(/\s+/g, '-') === slug
  );
  
  if (!review) return null;
  
  return {
    _id: review.title.toLowerCase().replace(/\s+/g, '-'),
    title: review.title,
    slug: { current: review.title.toLowerCase().replace(/\s+/g, '-') },
    publishedAt: review.publishedAt,
    rating: review.rating,
    summary: review.summary,
    review: review.review
  };
}