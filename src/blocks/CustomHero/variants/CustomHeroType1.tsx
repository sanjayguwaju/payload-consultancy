/* eslint-disable @next/next/no-img-element */
import { GraduationCap } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const CustomHeroType1 = (props: any) => {
  const { isReverse } = props;
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-24">
        <div className="container mx-auto px-4">
          <div
            className={
              `flex ${ 
                isReverse ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'
              } items-center justify-between gap-12`
            }
          >
            {/* Text Section */}
            <div className="flex-1 max-w-2xl">
              <h1 className="text-black text-4xl md:text-5xl font-bold mb-6">
                Talk to our expert
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Counsellors in our{' '}
                <Link href="/virtual-office" className="text-blue-600 underline">
                  Virtual Office
                </Link>{' '}
                right away!
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-indigo-600">•</span>
                  Learn about benefits, courses, eligibility, and scholarships
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-indigo-600">•</span>
                  Get started on your study abroad journey right away with us
                </li>
              </ul>
              <div className="inline-flex items-center gap-3 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-xl">
                <GraduationCap className="w-5 h-5" />
                <div>
                  <div className="font-medium">Sunday - Friday</div>
                  <div className="text-sm">10:30 AM - 5:00 PM</div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
                alt="Student with laptop"
                className="rounded-xl shadow-xl object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
