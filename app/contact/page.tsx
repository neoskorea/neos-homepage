'use client';

import { useState } from 'react';
import { Section } from '@/components/Section';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { useLanguage } from '@/contexts/LanguageContext';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const { t } = useLanguage();

  const budgetRanges = [
    t('contact.budgetRanges.under10m'),
    t('contact.budgetRanges.10to50m'),
    t('contact.budgetRanges.50to100m'),
    t('contact.budgetRanges.over100m'),
  ];

  const serviceTypes = [
    t('contact.services.advertising'),
    t('contact.services.video'),
    t('contact.services.consulting'),
    t('contact.services.management'),
    t('contact.services.content'),
    t('contact.services.other'),
  ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    service: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage(`${t('contact.form.name')}을 입력해주세요.`);
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage(`${t('contact.form.email')}을 입력해주세요.`);
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('올바른 이메일 형식을 입력해주세요.');
      return false;
    }
    if (!formData.service) {
      setErrorMessage(`${t('contact.form.service')}를 선택해주세요.`);
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage(`${t('contact.form.message')}을 입력해주세요.`);
      return false;
    }
    if (formData.message.trim().length < 10) {
      setErrorMessage(`${t('contact.form.message')}을 10자 이상 입력해주세요.`);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 폼 유효성 검사
    if (!validateForm()) {
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    setErrorMessage('');

    try {
      // 실제 API 호출 시뮬레이션 (2초 대기)
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // 90% 확률로 성공, 10% 확률로 실패 (테스트용)
          if (Math.random() > 0.1) {
            resolve('success');
          } else {
            reject(new Error('서버 오류가 발생했습니다.'));
          }
        }, 2000);
      });

      setFormStatus('success');
      // 성공 시 폼 리셋
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        service: '',
        message: '',
      });
    } catch (error) {
      setFormStatus('error');
      setErrorMessage('문의 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  const resetForm = () => {
    setFormStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="text-center max-w-5xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-primary mb-8 md:mb-12 tracking-tight">
            {t('contact.title')}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
            {t('contact.subtitle')}
          </p>
        </div>
      </Section>

      {/* Contact Form & Information */}
      <Section className="py-20 md:py-32 lg:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-primary mb-6 md:mb-8 tracking-wider uppercase">
              {t('contact.getInTouch')}
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-primary">{t('contact.form.title')}</h3>
                </div>

                {/* Success Message */}
                {formStatus === 'success' && (
                  <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-green-800">{t('contact.form.success')}</h4>
                        <p className="text-green-700 text-sm mt-1">{t('contact.form.successSubtitle')}</p>
                      </div>
                    </div>
                    <button
                      onClick={resetForm}
                      className="mt-4 text-sm text-green-600 hover:text-green-800 font-medium"
                    >
                      {t('contact.form.newInquiry')} →
                    </button>
                  </div>
                )}

                {/* Error Message */}
                {formStatus === 'error' && errorMessage && (
                  <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-red-800">{t('contact.form.error')}</h4>
                        <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
                      </div>
                    </div>
                    {/* <button
                      onClick={resetForm}
                      className="mt-4 text-sm text-red-600 hover:text-red-800 font-medium"
                    >
                      다시 시도하기 →
                    </button> */}
                  </div>
                )}

                {/* Form - Hidden when successful */}
                {formStatus !== 'success' && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-3">
                          {t('contact.form.name')} <span className="text-primary">{t('contact.form.required')}</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          disabled={formStatus === 'submitting'}
                          className={`block w-full rounded-xl border-2 px-4 py-3 focus:ring-0 transition-colors text-gray-800 placeholder-gray-400 ${formStatus === 'submitting'
                            ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                            : 'border-gray-200 focus:border-primary hover:border-gray-300'
                            }`}
                          placeholder={t('contact.form.placeholders.name')}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-3">
                          {t('contact.form.email')} <span className="text-primary">{t('contact.form.required')}</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          disabled={formStatus === 'submitting'}
                          className={`block w-full rounded-xl border-2 px-4 py-3 focus:ring-0 transition-colors text-gray-800 placeholder-gray-400 ${formStatus === 'submitting'
                            ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                            : 'border-gray-200 focus:border-primary hover:border-gray-300'
                            }`}
                          placeholder={t('contact.form.placeholders.email')}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-3">
                        {t('contact.form.company')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        disabled={formStatus === 'submitting'}
                        className={`block w-full rounded-xl border-2 px-4 py-3 focus:ring-0 transition-colors text-gray-800 placeholder-gray-400 ${formStatus === 'submitting'
                          ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                          : 'border-gray-200 focus:border-primary hover:border-gray-300'
                          }`}
                        placeholder={t('contact.form.placeholders.company')}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-gray-800 mb-3">
                          {t('contact.form.service')} <span className="text-primary">{t('contact.form.required')}</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          disabled={formStatus === 'submitting'}
                          className={`block w-full rounded-xl border-2 px-4 py-3 focus:ring-0 transition-colors text-gray-800 ${formStatus === 'submitting'
                            ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                            : 'border-gray-200 focus:border-primary hover:border-gray-300'
                            }`}
                          required
                        >
                          <option value="">{t('contact.form.placeholders.service')}</option>
                          {serviceTypes.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-semibold text-gray-800 mb-3">
                          {t('contact.form.budget')}
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          disabled={formStatus === 'submitting'}
                          className={`block w-full rounded-xl border-2 px-4 py-3 focus:ring-0 transition-colors text-gray-800 ${formStatus === 'submitting'
                            ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                            : 'border-gray-200 focus:border-primary hover:border-gray-300'
                            }`}
                        >
                          <option value="">{t('contact.form.placeholders.budget')}</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-3">
                        {t('contact.form.message')} <span className="text-primary">{t('contact.form.required')}</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        disabled={formStatus === 'submitting'}
                        className={`block w-full rounded-xl border-2 px-4 py-3 focus:ring-0 transition-colors text-gray-800 placeholder-gray-400 resize-none ${formStatus === 'submitting'
                          ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                          : 'border-gray-200 focus:border-primary hover:border-gray-300'
                          }`}
                        placeholder={t('contact.form.placeholders.message')}
                        required
                      />
                    </div>

                    <div className="pt-6">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={formStatus === 'submitting'}
                        className={`w-full font-semibold py-4 rounded-xl shadow-lg transition-all duration-300 ${formStatus === 'submitting'
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-primary hover:bg-primary/90 hover:shadow-xl transform hover:-translate-y-0.5'
                          } text-white`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          {formStatus === 'submitting' ? (
                            <>
                              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              {t('contact.form.submitting')}
                            </>
                          ) : (
                            <>
                              {t('contact.form.submit')}
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                              </svg>
                            </>
                          )}
                        </span>
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-primary">{t('contact.info.title')}</h3>
                </div>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-800 mb-2">{t('contact.info.address.title')}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
                        {t('contact.info.address.content')}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-800 mb-2">{t('contact.info.email.title')}</h4>
                      <a
                        href="mailto:contact@neoskorea.com"
                        className="text-gray-600 hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group"
                      >
                        contact@neoskorea.com
                        <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-800 mb-2">{t('contact.info.hours.title')}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
                        {t('contact.info.hours.content')}
                      </p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-800 mb-2">{t('contact.info.social.title')}</h4>
                      <a
                        href="https://www.instagram.com/neos.inc_official/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition-colors inline-flex items-center gap-2 text-sm group"
                      >
                        @neos.inc_official
                        <svg className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="aspect-[4/3]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d792.1542949226767!2d127.0254158!3d37.5144386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca151f08b2b57%3A0x60a69b1d6a8a6f78!2s%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%85%BC%ED%98%84%EB%A1%9C128%EA%B8%B8%2020!5e0!3m2!1sko!2skr!4v1699999999999!5m2!1sko!2skr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <h4 className="text-base font-semibold text-primary">{t('contact.info.map.title')}</h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {t('contact.info.map.directions')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
} 