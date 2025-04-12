'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAttendance } from '../hooks/useFirebase';
import SectionTitle from './SectionTitle';

const schema = yup.object().shape({
  name: yup.string().required('Vui lòng nhập tên của bạn'),
  email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
  phone: yup.string().required('Vui lòng nhập số điện thoại'),
});

export default function AttendanceForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { submitAttendance, loading: attendanceLoading, error: attendanceError } = useAttendance();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);

    try {
      const success = await submitAttendance({
        name: data.name,
        email: data.email,
        phone: data.phone
      });

      if (success) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting attendance:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="attendance" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Xác Nhận Tham Dự"
          subtitle="Chúng tôi rất mong được gặp bạn trong ngày trọng đại"
        />

        {submitStatus === 'success' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center p-6 bg-green-50 rounded-lg"
          >
            <h3 className="text-green-800 font-semibold text-xl mb-2">
              Cảm ơn bạn đã xác nhận tham dự!
            </h3>
            <p className="text-green-600">
              Chúng tôi rất mong được gặp bạn trong ngày trọng đại.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {attendanceError && (
              <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                {attendanceError}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Họ và tên
              </label>
              <input
                type="text"
                {...register('name')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 h-10 px-4 text-gray-900"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                {...register('email')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 h-10 px-4 text-gray-900"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Số điện thoại
              </label>
              <input
                type="tel"
                {...register('phone')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 h-10 px-4 text-gray-900"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || attendanceLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50"
            >
              {isSubmitting || attendanceLoading
                ? 'Đang gửi...'
                : 'Xác nhận tham dự'}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
} 