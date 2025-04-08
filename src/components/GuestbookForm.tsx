'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useGuestbook } from '../hooks/useFirebase';

const schema = yup.object().shape({
  name: yup.string().required('Vui lòng nhập tên của bạn'),
  message: yup.string().required('Vui lòng nhập lời chúc'),
});

export default function GuestbookForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const { submitMessage, loading: guestbookLoading, error: guestbookError, messages } = useGuestbook();

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
    setSubmitStatus(null);

    try {
      const success = await submitMessage({
        name: data.name,
        message: data.message
      });

      if (success) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="guestbook" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lời Chúc
          </h2>
          <p className="font-cormorant text-xl text-gray-600">
            Gửi lời chúc đến cặp đôi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center p-6 bg-green-50 rounded-lg"
              >
                <h3 className="text-green-800 font-semibold text-xl mb-2">
                  Cảm ơn lời chúc của bạn!
                </h3>
                <p className="text-green-600">
                  Lời chúc của bạn đã được gửi thành công.
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 bg-white p-6 rounded-lg shadow-sm"
              >
                {guestbookError && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                    {guestbookError}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Lời chúc
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || guestbookLoading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50"
                >
                  {isSubmitting || guestbookLoading
                    ? 'Đang gửi...'
                    : 'Gửi lời chúc'}
                </button>
              </motion.form>
            )}
          </motion.div>

          {/* Messages Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-sm overflow-y-auto max-h-[600px]"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Lời chúc mừng</h3>
            <div className="space-y-6">
              {messages.map((message) => (
                <div key={message.id} className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{message.name}</h4>
                    <span className="text-sm text-gray-500">
                      {/* {message.timestamp?.toLocaleDateString('vi-VN')} */}
                    </span>
                  </div>
                  <p className="text-gray-600">{message.message}</p>
                </div>
              ))}
              {messages.length === 0 && (
                <p className="text-gray-500 text-center">Chưa có lời chúc nào</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 