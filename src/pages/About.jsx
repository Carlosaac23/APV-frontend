import { PawPrint } from 'lucide-react';
import { Link } from 'react-router-dom';

import { values, numbers } from '@/helpers/aboutArrays';
import { features } from '@/helpers/homeArrays';

export default function About() {
  return (
    <section className='overflow-hidden border border-sky-100 bg-white shadow-[0_30px_80px_-40px_rgba(14,116,144,0.45)]'>
      <div className='relative px-6 py-10 md:px-10 md:py-14'>
        <div className='absolute top-0 right-0 h-44 w-44 translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-200/40 blur-3xl' />
        <div className='absolute bottom-0 left-0 h-56 w-56 -translate-x-1/3 translate-y-1/3 rounded-full bg-sky-200/40 blur-3xl' />

        <div className='relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start'>
          <div className='rounded-[2rem] bg-slate-950 p-7 text-white md:p-8'>
            <span className='inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-200'>
              About APV
            </span>

            <h1 className='mt-6 text-4xl font-black tracking-tight md:text-5xl'>
              A friendlier way to manage veterinary patient care.
            </h1>

            <p className='mt-5 text-lg leading-8 text-slate-300'>
              APV exists to help veterinary professionals stay organized without
              adding more stress to the day. It brings patient information,
              treatment notes, and follow-up tracking into a workflow that feels
              lighter and easier to trust.
            </p>

            <div className='mt-8 grid gap-4 sm:grid-cols-3'>
              {numbers.map(item => (
                <div
                  key={item.value}
                  className='rounded-3xl border border-white/10 bg-white/5 p-4'
                >
                  <p className='text-2xl font-black text-white'>{item.value}</p>
                  <p className='mt-2 text-sm leading-6 text-slate-300'>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className='inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700'>
              Built around care, clarity, and confidence
            </span>

            <h2 className='mt-6 max-w-2xl text-3xl font-black tracking-tight text-sky-950 md:text-5xl'>
              APV helps clinics spend less energy on administration and more on
              the animals they treat.
            </h2>

            <p className='mt-5 max-w-2xl text-lg leading-8 text-slate-600'>
              The project focuses on one simple idea: patient management should
              feel calm, readable, and dependable. When records are clear and
              easy to update, teams communicate better and daily operations run
              with fewer interruptions.
            </p>

            <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
              <Link
                className='inline-flex items-center justify-center rounded-2xl bg-sky-500 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-600'
                to='/register'
              >
                Start with APV
              </Link>
              <Link
                className='inline-flex items-center justify-center rounded-2xl border border-sky-200 bg-white px-7 py-3 text-base font-semibold text-sky-700 transition hover:border-sky-300 hover:bg-sky-50'
                to='/login'
              >
                Access your account
              </Link>
            </div>
          </div>
        </div>

        <div className='relative mt-10 grid gap-4 md:grid-cols-3'>
          {values.map(value => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className='rounded-3xl border border-slate-200 bg-slate-50/80 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg'
              >
                <div className='inline-flex rounded-2xl bg-sky-100 p-3 text-sky-700'>
                  <Icon className='size-6' />
                </div>
                <h3 className='mt-4 text-xl font-bold text-slate-900'>
                  {value.title}
                </h3>
                <p className='mt-3 leading-7 text-slate-600'>
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className='relative mt-10 rounded-[2rem] border border-sky-100 bg-linear-to-r from-sky-50 via-white to-cyan-50 p-6 md:p-8'>
          <div className='flex items-start gap-4'>
            <div className='inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-600'>
              <PawPrint className='size-6' />
            </div>
            <div>
              <p className='text-sm font-semibold tracking-[0.2em] text-sky-700 uppercase'>
                What APV stands for
              </p>
              <h2 className='mt-2 text-2xl font-black text-slate-900 md:text-3xl'>
                Better systems support better care.
              </h2>
              <p className='mt-4 max-w-3xl leading-8 text-slate-600'>
                APV is not just about storing information. It is about helping a
                clinic feel more in control, making each patient easier to
                follow, and creating a workflow that supports the people doing
                the work every day.
              </p>
            </div>
          </div>
        </div>

        <div className='mt-10 grid gap-4 md:grid-cols-3'>
          {features.map(feature => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'
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
