import React from "react";
import StarRating from "./StarRating";

const testimonials = [
  {
    text: "The booking process was seamless, and I found exactly what I was looking for in minutes. The hotel matched the photos and was spotless. Highly recommend!",
    name: "Leslie Alexander",
    handle: "@lesliealexander",
  },
  {
    text: "I’ve used many hotel booking platforms, but this one stood out for its clarity and reliability. I even got a last-minute discount. Will definitely use again!",
    name: "Michael Foster",
    handle: "@michaelfoster",
  },
  {
    text: "Wasn’t sure about booking online, but the filters and reviews helped a lot. Stayed at a lovely resort and had zero issues. Customer support was fast too.",
    name: "Dries Vincent",
    handle: "@driesvincent",
  },
  {
    text: "I booked a weekend getaway through this site and it exceeded expectations. Easy to navigate, great deals, and the check-in process was smooth. My go-to from now on.",
    name: "Brenna Goyette",
    handle: "@brennagoyette",
    featured: true,
  },
  {
    text: "Everything from the hotel search to final payment was smooth. The map view is super helpful when choosing locations. Great user experience!",
    name: "Lindsay Walton",
    handle: "@lindsaywalton",
  },
  {
    text: "Found a cozy boutique hotel at half the price I expected. Loved the honest guest reviews and the ease of comparing options. Perfect for spontaneous travelers.",
    name: "Courtney Henry",
    handle: "@courtneyhenry",
  },
  {
    text: "This platform helped me book a hotel close to my conference with just a few clicks. Hassle-free booking, instant confirmation. Loved the cashback offer too.",
    name: "Tom Cook",
    handle: "@tomcook",
  },
  {
    text: "Even during peak season, I found clean and affordable rooms easily. The app is intuitive and fast. No hidden charges, which I appreciate.",
    name: "Whitney Francis",
    handle: "@whitneyfrancis",
  },
  {
    text: "A friend recommended this site and I’m glad I tried it. Prices are transparent, and the cancellation policy was clearly explained. Solid experience.",
    name: "Leonard Krasner",
    handle: "@leonardkrasner",
  },
  {
    text: "I booked a luxury stay for my anniversary and everything went smoothly. The special requests I added during booking were taken care of by the hotel. 10/10!",
    name: "Floyd Miles",
    handle: "@floydmiles",
  },
  {
    text: "User-friendly and efficient. I liked the curated recommendations and verified photos. Helped me avoid sketchy listings and book confidently.",
    name: "Emily Selman",
    handle: "@emilyselman",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white pt-16">
      {/* Top Gradient Header */}
      <div className="bg-gradient-to-r from-white via-blue-50 to-white py-12 px-6 md:px-12 lg:px-24 text-center">
        <p className="text-sm text-indigo-600 font-semibold uppercase">
          Testimonials
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Trusted by thousands of happy travelers
        </h2>
        {/* Testimonials Grid */}

        <div className="px-6 md:px-12 lg:px-24 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 shadow-md bg-white transition duration-300 hover:shadow-lg ${
                t.featured
                  ? "col-span-1 sm:col-span-2 lg:col-span-2 border border-purple-200 bg-purple-50"
                  : ""
              }`}
            >
              <p className="text-gray-700 text-base mb-4">“{t.text}”</p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.handle}</p>
                </div>
                {/* Combined StarRating and Featured Tag for better alignment */}
                <div className="flex items-center gap-1 mt-4 sm:mt-0">
                  {" "}
                  {/* Added gap-4 for spacing */}
                  <StarRating />
                  {t.featured && (
                    <span className="text-xs text-purple-700 font-medium bg-purple-100 px-2 py-1 rounded-full">
                      ★ Featured Guest
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
