import { CheckCircle2, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

import { features, highlights } from '@/helpers/homeArrays';

export default function Home() {
  return (
    <section className='overflow-hidden border border-sky-100 bg-white shadow-[0_30px_80px_-40px_rgba(14,116,144,0.45)]'>
      <div className='relative px-6 py-10 md:px-10 md:py-14'>
        <div className='grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center'>
          <div>
            <span className='inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700'>
              Friendly care starts with a better system
            </span>

            <h1 className='mt-6 max-w-2xl text-4xl font-black tracking-tight text-sky-950 md:text-6xl'>
              Manage your veterinary patients with clarity, speed, and less
              daily stress.
            </h1>

            <p className='mt-5 max-w-2xl text-lg leading-8 text-slate-600'>
              APV helps you keep patient information tidy, accessible, and easy
              to update so your team can spend more time caring for pets and
              less time chasing records.
            </p>

            <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
              <Link
                className='inline-flex items-center justify-center rounded-2xl bg-sky-500 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-600'
                to='/register'
              >
                Create an account
              </Link>
              <Link
                className='inline-flex items-center justify-center rounded-2xl border border-sky-200 bg-white px-7 py-3 text-base font-semibold text-sky-700 transition hover:border-sky-300 hover:bg-sky-50'
                to='/login'
              >
                Log in
              </Link>
            </div>

            <ul className='mt-8 space-y-3'>
              {highlights.map(item => (
                <li
                  key={item}
                  className='flex items-start gap-3 text-sm text-slate-700 md:text-base'
                >
                  <CheckCircle2 className='mt-0.5 size-5 shrink-0 text-emerald-500' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='relative'>
            <div className='rounded-[2rem] bg-linear-to-br from-sky-600 via-cyan-500 to-emerald-400 p-px shadow-2xl shadow-sky-200/70'>
              <div className='rounded-[calc(2rem-1px)] bg-slate-950 p-6 text-white'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-sm text-sky-200'>Today at APV</p>
                    <h2 className='mt-1 text-2xl font-bold'>Clinic snapshot</h2>
                  </div>
                  <div className='rounded-2xl bg-white/10 p-3'>
                    <HeartPulse className='size-7 text-cyan-300' />
                  </div>
                </div>

                <div className='mt-8 grid gap-4 sm:grid-cols-2'>
                  <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
                    <p className='text-sm text-slate-300'>Active patients</p>
                    <p className='mt-2 text-3xl font-black'>128</p>
                    <p className='mt-1 text-sm text-emerald-300'>
                      Up to date and easy to review
                    </p>
                  </div>
                  <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
                    <p className='text-sm text-slate-300'>Pending follow-ups</p>
                    <p className='mt-2 text-3xl font-black'>14</p>
                    <p className='mt-1 text-sm text-cyan-300'>
                      Clear next actions for the team
                    </p>
                  </div>
                </div>

                <div className='mt-4 rounded-3xl border border-white/10 bg-white/5 p-5'>
                  <p className='text-sm font-semibold text-sky-200'>
                    Why teams like APV
                  </p>
                  <p className='mt-3 text-sm leading-7 text-slate-200'>
                    A clean workflow makes appointments smoother. Notes are
                    easier to find, patients are easier to track, and your day
                    feels less chaotic from the first check-in to the final
                    update.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-10 grid gap-4 md:grid-cols-3'>
          {features.map(feature => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className='rounded-3xl border border-slate-200 bg-slate-50/80 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg'
              >
                <div className='inline-flex rounded-2xl bg-sky-100 p-3 text-sky-700'>
                  <Icon className='size-6' />
                </div>
                <h3 className='mt-4 text-xl font-bold text-slate-900'>
                  {feature.title}
                </h3>
                <p className='mt-3 leading-7 text-slate-600'>
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
