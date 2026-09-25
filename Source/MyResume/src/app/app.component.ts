import { Component } from '@angular/core';

interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: string;
  external: boolean;
}

interface SocialLink {
  label: string;
  username: string;
  url: string;
  icon: string;
}

interface PersonalDetail {
  label: string;
  value: string;
  icon: string;
}

interface Skill {
  name: string;
}

interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: readonly string[];
}

interface Project {
  name: string;
  type: string;
  period: string;
  description: string;
  tags: readonly string[];
  url: string;
  urlLabel: string;
}

interface Course {
  title: string;
  institution: string;
  period: string;
  url: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly title = 'رزومه سامان آزادی';
  readonly name = 'سامان آزادی';
  readonly role = 'برنامه‌نویس دات‌نت';
  readonly avatarUrl = 'https://avatars.githubusercontent.com/u/60857846?v=4';
  readonly summary =
    'برنامه‌نویس دات‌نت با تجربه در طراحی، توسعه و نگهداری سامانه‌های سازمانی، مالی و خدماتی. تمرکز اصلی من بر توسعه بک‌اند با ASP.NET Core، طراحی و بهینه‌سازی پایگاه داده و پیاده‌سازی معماری‌های مبتنی بر میکروسرویس است؛ در کنار آن، تجربه توسعه فرانت‌اند با Angular را نیز دارم. با استفاده از Docker، CI/CD و ابزارهای مرتبط با عملیات، بر پایداری، مقیاس‌پذیری و کیفیت محصولات نرم‌افزاری تمرکز می‌کنم. معتقدم همکاری مؤثر، ارتباط شفاف و یادگیری مستمر، کلید موفقیت در پروژه‌های تیمی است.';

  isDarkTheme = false;

  constructor() {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      const savedTheme = window.localStorage.getItem('resume-theme');
      this.isDarkTheme =
        savedTheme === 'dark' ||
        (savedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
    } catch {
      this.isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    this.applyTheme();
  }

  readonly contacts: readonly ContactItem[] = [
    {
      label: 'ایمیل',
      value: 'samanazadi1996@gmail.com',
      href: 'mailto:samanazadi1996@gmail.com',
      icon: 'envelope',
      external: false,
    },
    {
      label: 'تلفن',
      value: '+98 930 424 1296',
      href: 'tel:+989304241296',
      icon: 'phone',
      external: false,
    },
    {
      label: 'موقعیت',
      value: 'تهران، میدان فردوسی',
      href: '#contact',
      icon: 'location',
      external: false,
    },
    {
      label: 'وب‌سایت',
      value: 'coffeete.ir',
      href: 'https://coffeete.ir',
      icon: 'globe',
      external: true,
    },
  ];

  readonly socialLinks: readonly SocialLink[] = [
    {
      label: 'گیت‌هاب',
      username: 'samanazadi1996',
      url: 'https://github.com/samanazadi1996',
      icon: 'github',
    },
    {
      label: 'لینکدین',
      username: 'saman-azadi',
      url: 'https://www.linkedin.com/in/saman-azadi/',
      icon: 'linkedin',
    },
  ];

  readonly personalDetails: readonly PersonalDetail[] = [
    { label: 'تاریخ تولد', value: '۱۳۷۵/۰۴/۱۴', icon: 'calendar' },
    { label: 'وضعیت تأهل', value: 'مجرد', icon: 'user' },
    { label: 'وضعیت سربازی', value: 'معاف از وظیفه', icon: 'shield' },
  ];

  readonly skills: readonly Skill[] = [
    { name: 'ASP.NET' },
    { name: 'C#' },
    { name: 'JavaScript' },
    { name: 'jQuery' },
    { name: 'SQL Server' },
    { name: 'Docker' },
    { name: 'Git' },
    { name: 'HTML / CSS' },
    { name: 'Bootstrap' },
    { name: 'RabbitMQ' },
    { name: 'Redis' },
  ];

  readonly focusAreas = [
    'توسعه بک‌اند با ASP.NET Core',
    'توسعه فرانت‌اند با Angular',
    'طراحی و بهینه‌سازی پایگاه داده',
    'میکروسرویس، Docker و CI/CD',
  ] as const;

  readonly experiences: readonly Experience[] = [
    {
      company: 'شرکت رایان هم‌افزا',
      role: 'برنامه‌نویس دات‌نت',
      location: 'تهران',
      period: 'اردیبهشت ۱۴۰۵ تا اکنون',
      achievements: [
        'توسعه، بهبود و نگهداری سامانه‌های صندوق، پورتفوی و پنل مشتریان.',
        'توسعه و پشتیبانی سامانه ثبت‌نام غیرحضوری و بهبود فرایندهای جذب و احراز مشتریان.',
        'رفع خطاها، پشتیبانی فنی و بهینه‌سازی عملکرد سامانه‌های موجود.',
        'مشارکت در توسعه قابلیت‌های جدید و بهبود تجربه کاربری پنل مشتریان.',
      ],
    },
    {
      company: 'شرکت بهپرداز جهان',
      role: 'برنامه‌نویس دات‌نت',
      location: 'تهران',
      period: 'مرداد ۱۴۰۳ تا اسفند ۱۴۰۴',
      achievements: [
        'طراحی و پیاده‌سازی برنامه‌های کاربردی وب در فرانت‌اند با Angular و در بک‌اند با .NET.',
        'تمرکز بر بهینه‌سازی عملکرد، مقیاس‌پذیری و بهبود تجربه کاربری سامانه‌ها.',
        'طراحی و توسعه زیرسیستم داده‌آمایی ثبت شرکت‌ها برای سازمان ثبت اسناد.',
        'توسعه سامانه با Oracle و بهینه‌سازی پرس‌وجوها برای افزایش کارایی پردازش داده‌ها.',
        'پیاده‌سازی کامل سامانه اشخاص حقوقی و انتقال و یکپارچه‌سازی داده‌ها.',
      ],
    },
    {
      company: 'سامانه سام سیروان',
      role: 'برنامه‌نویس دات‌نت',
      location: 'تهران',
      period: 'مرداد ۱۴۰۰ تا مرداد ۱۴۰۳',
      achievements: [
        'طراحی و توسعه سیستم جامع مدیریت امور مالیاتی برای مودیان.',
        'طراحی و پیاده‌سازی سوییچ مالیاتی برای هماهنگی میان سیستم‌های مالیاتی مختلف.',
        'توسعه نرم‌افزار فروشگاهی آنلاین با قابلیت‌های کامل مدیریت فروش و محصولات.',
        'نوشتن و اجرای تست‌های واحد، کاربردی و بارگذاری برای تضمین کیفیت نرم‌افزار.',
        'کانتینرسازی پروژه‌ها با Docker و راه‌اندازی CI/CD برای خودکارسازی توسعه، تست و انتشار.',
      ],
    },
    {
      company: 'شرکت نیکراستین پارسا',
      role: 'برنامه‌نویس دات‌نت',
      location: 'تهران',
      period: 'شهریور ۱۳۹۸ تا شهریور ۱۴۰۰',
      achievements: [
        'توسعه نرم‌افزار Bycheck.',
        'توسعه و پیاده‌سازی برنامه‌های درون‌سازمانی با ASP.NET MVC و ASP.NET Core.',
        'تجزیه پروژه‌های یکپارچه به میکروسرویس‌های مستقل برای بهبود مقیاس‌پذیری و نگهداری.',
        'کانتینرسازی میکروسرویس‌ها با Docker برای ایجاد محیط اجرایی یکسان در توسعه و تولید.',
        'پیاده‌سازی و پیکربندی ELK برای ذخیره‌سازی و جست‌وجوی متمرکز و پرکارایی لاگ‌ها.',
      ],
    },
  ];

  readonly projects: readonly Project[] = [
    {
      name: 'سامانه کاتب',
      type: 'پروژه سازمانی',
      period: '۱۴۰۳ تا ۱۴۰۴',
      description:
        'سامانه ثبت شرکت‌ها و اشخاص حقوقی با تمرکز بر داده‌آمایی، بهینه‌سازی پرس‌وجوها و یکپارچه‌سازی اطلاعات.',
      tags: ['Angular', '.NET', 'Oracle'],
      url: 'https://kateb.ir',
      urlLabel: 'kateb.ir',
    },
    {
      name: 'کافیته',
      type: 'پروژه شخصی',
      period: 'آذر ۱۴۰۰',
      description:
        'پلتفرم حمایت مالی از یوتیوب‌رها، بلاگرها، موسیقیدانان و پادکسترها؛ هر کاربر می‌تواند صفحه شخصی بسازد و لینک حمایت را به اشتراک بگذارد.',
      tags: ['Web', 'Startup'],
      url: 'https://coffeete.ir',
      urlLabel: 'coffeete.ir',
    },
    {
      name: 'Sam.CleanArchitecture',
      type: 'قالب متن‌باز',
      period: 'تیر ۱۴۰۲',
      description:
        'قالب کامل و مستند Clean Architecture برای شروع سریع پروژه‌های Web API با فایل‌های آماده Visual Studio 2022 و راهنمای جامع استفاده.',
      tags: ['Clean Architecture', '.NET', 'Web API'],
      url: 'https://github.com/samanazadi1996/Sam.CleanArchitecture',
      urlLabel: 'GitHub',
    },
    {
      name: 'Sam.FileTableSqlServer',
      type: 'کتابخانه متن‌باز',
      period: 'شهریور ۱۴۰۱',
      description:
        'کتابخانه ذخیره‌سازی فایل با قابلیت FileTable در SQL Server برای مدیریت بهینه فایل‌ها در محیط ویندوز.',
      tags: ['SQL Server', 'FileTable', '.NET'],
      url: 'https://github.com/samanazadi1996/Sam.FileTableSqlServer',
      urlLabel: 'GitHub',
    },
    {
      name: 'SmartToolkit',
      type: 'پروژه شخصی',
      period: '۱۴۰۳',
      description:
        'مجموعه‌ای از ابزارهای آنلاین برای توسعه‌دهندگان با هدف بهبود تجربه کاربری و تسهیل فرایندهای مختلف توسعه نرم‌افزار.',
      tags: ['Angular', 'Developer Tools'],
      url: 'https://smarttoolkit.github.io',
      urlLabel: 'smarttoolkit.github.io',
    },
  ];

  readonly courses: readonly Course[] = [
    {
      title: 'معماری دامنه‌محور',
      institution: 'مؤسسه نیکاموز',
      period: 'فروردین ۱۴۰۰',
      url: 'https://nikamooz.com/product/domain-driven-design-course',
    },
    {
      title: 'معماری میکروسرویس',
      institution: 'مؤسسه نیکاموز',
      period: 'مهر ۱۴۰۱',
      url: 'https://nikamooz.com/product/microservice-course',
    },
    {
      title: 'داکر ویژه برنامه‌نویسان و مدیران بانک اطلاعاتی',
      institution: 'مؤسسه نیکاموز',
      period: 'مرداد ۱۴۰۱',
      url: 'https://nikamooz.com/product/domain-driven-design-course',
    },
  ];

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme();

    if (typeof window === 'undefined') {
      return;
    }

    try {
      window.localStorage.setItem('resume-theme', this.isDarkTheme ? 'dark' : 'light');
    } catch {
      return;
    }
  }

  private applyTheme(): void {
    if (typeof document !== 'undefined') {
      document.documentElement.dataset['theme'] = this.isDarkTheme ? 'dark' : 'light';
    }
  }

  printResume(): void {
    window.print();
  }
}
