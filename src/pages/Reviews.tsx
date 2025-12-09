import { Star } from 'lucide-react';
import { reviews, ratings } from '@/data/reviewsData';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? 'text-primary fill-primary' : 'text-muted-foreground'
          }`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-20 bg-charcoal">
        <div className="container-custom text-center">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Testimonials
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Guest Reviews
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our valued guests have to say about their Aurum experience.
          </p>
        </div>
      </section>

      {/* Rating Badges */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl font-display font-bold text-primary">{ratings.google}</span>
                <Star className="w-6 h-6 text-primary fill-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Google Reviews</p>
            </div>
            <div className="h-12 w-px bg-border hidden md:block" />
            <div className="text-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl font-display font-bold text-primary">{ratings.zomato}</span>
                <Star className="w-6 h-6 text-primary fill-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Zomato Rating</p>
            </div>
            <div className="h-12 w-px bg-border hidden md:block" />
            <div className="text-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl font-display font-bold text-primary">{ratings.tripadvisor}</span>
                <Star className="w-6 h-6 text-primary fill-primary" />
              </div>
              <p className="text-sm text-muted-foreground">TripAdvisor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-semibold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(review.date).toLocaleDateString('en-US', {
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                <StarRating rating={review.rating} />
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Share Your Experience
          </h2>
          <p className="text-muted-foreground mb-6">
            Dined with us recently? We'd love to hear your feedback.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors text-sm font-medium"
            >
              Review on Google
            </a>
            <a
              href="https://zomato.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors text-sm font-medium"
            >
              Review on Zomato
            </a>
            <a
              href="https://tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors text-sm font-medium"
            >
              Review on TripAdvisor
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
