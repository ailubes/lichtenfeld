'use client'

import { useState } from 'react'
import { reviews as initialReviews, addReview, getAverageRating, getRatingDistribution } from '@/lib/reviews-data'
import { Star, CheckCircle, User, Calendar } from 'lucide-react'

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    product: '',
    rating: 5,
    text: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const averageRating = getAverageRating()
  const ratingDistribution = getRatingDistribution()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newReview = addReview({
      ...formData,
      date: new Date().toISOString().split('T')[0]
    })
    setReviews([newReview, ...reviews])
    setFormData({ name: '', product: '', rating: 5, text: '' })
    setShowForm(false)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Відгуки клієнтів
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Думки наших клієнтів про сири та напої ферми Ліхтенфельд
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Rating Summary */}
        <div className="bg-white rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <span className="text-5xl font-bold text-neutral-900 mr-3">
                  {averageRating}
                </span>
                <div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < Math.round(averageRating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-neutral-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-neutral-600 mt-1">
                    {reviews.length} відгуків
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-3">
                  <span className="text-sm text-neutral-600 w-3">{rating}</span>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <div className="flex-1 bg-neutral-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{
                        width: `${(ratingDistribution[rating] / reviews.length) * 100}%`
                      }}
                    />
                  </div>
                  <span className="text-sm text-neutral-600 w-8">
                    {ratingDistribution[rating]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-green-800">
              Дякуємо за ваш відгук! Він буде опублікований після модерації.
            </span>
          </div>
        )}

        {/* Write Review Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all"
          >
            {showForm ? 'Приховати форму' : 'Написати відгук'}
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className="bg-white rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 font-serif">
              Залишити відгук
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Ваше ім'я *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Іван Іванович"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Продукт (необов'язково)
                </label>
                <input
                  type="text"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Наприклад: Чеддер, Сирний сет Му"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Оцінка *
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating })}
                      className="p-1"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          rating <= formData.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-neutral-300'
                        } hover:fill-yellow-400 hover:text-yellow-400 transition-colors`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Ваш відгук *
                </label>
                <textarea
                  required
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  rows={5}
                  placeholder="Поділіться вашими враженнями про наші продукти..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all"
                >
                  Відправити відгук
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 bg-neutral-200 text-neutral-700 font-semibold rounded-xl hover:bg-neutral-300 transition-all"
                >
                  Скасувати
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <article key={review.id} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">
                        {review.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <Calendar className="w-3 h-3" />
                        {new Date(review.date).toLocaleDateString('uk-UA')}
                        {review.verified && (
                          <>
                            <span>•</span>
                            <span className="flex items-center gap-1 text-green-600">
                              <CheckCircle className="w-3 h-3" />
                              Перевірено
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  {review.product && (
                    <p className="text-sm text-primary-600 font-medium mb-2">
                      Продукт: {review.product}
                    </p>
                  )}
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-neutral-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-neutral-700">{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}