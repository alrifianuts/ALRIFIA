"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MessageCircle,
  Star,
  Award,
  Shield,
  Phone,
  Mail,
  MapPin,
  Globe,
  Heart,
  CheckCircle,
  Menu,
  X,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react"

export default function RifiaWebsite() {
  const [language, setLanguage] = useState<"ar" | "en">("ar")
  const [showAllProducts, setShowAllProducts] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"))
  }

  const isRTL = language === "ar"

  const content = {
    ar: {
      nav: {
        home: "الرئيسية",
        products: "المنتجات",
        about: "من نحن",
        contact: "تواصل معنا",
      },
      hero: {
        title: "الريفية",
        subtitle: "نكهة أصيلة من قلب المملكة",
        description: "مكسرات طبيعية محمصة بعناية فائقة، من مصانعنا في الجبيل الصناعية إلى مائدتكم",
        cta: "تواصل عبر واتساب",
        quality: "جودة عالية • طبيعي 100% • صنع في السعودية",
      },
      products: {
        title: "منتجاتنا المميزة",
        subtitle: "مجموعة متنوعة من أجود المكسرات المحمصة والطبيعية",
        items: [
          { name: "مكسرات مشكلة مملحة", nameEn: "Salted Mixed Nuts" },
          { name: "لوز مشوي بنكهة الشواء", nameEn: "Grilled Almonds (BBQ Flavor)" },
          { name: "لوز بنكهة الجبنة", nameEn: "Almonds with Cheese" },
          { name: "كاجو مملح", nameEn: "Salted Cashews" },
          { name: "كاجو مدخن", nameEn: "Smoked Cashews" },
          { name: "كاجو بنكهة الجبنة", nameEn: "Cashews with Cheese Flavor" },
          { name: "فول سوداني مملح", nameEn: "Salted Peanuts" },
          { name: "فول سوداني مقرمش بالجبنة", nameEn: "Crispy Peanuts with Cheese Flavor" },
          { name: "فول سوداني مقرمش بالكاتشب", nameEn: "Crispy Peanuts with Ketchup Flavor" },
          { name: "فول سوداني مقرمش حار", nameEn: "Crispy Spicy Peanuts" },
          { name: "فول سوداني بالشوكولاتة", nameEn: "Chocolate Covered Peanuts" },
          { name: "فستق مملح", nameEn: "Salted Pistachios" },
          { name: "فستق مشوي بنكهة الشواء", nameEn: "Grilled Pistachios (BBQ Flavor)" },
          { name: "حب مصري مملح", nameEn: "Salted Egyptian Seeds" },
          { name: "حب مصري غير مملح", nameEn: "Unsalted Egyptian Seeds" },
          { name: "حب قرع مملح", nameEn: "Salted Pumpkin Seeds" },
          { name: "حب قرع محمص", nameEn: "Roasted Pumpkin Seeds" },
          { name: "حب قرع غير مملح", nameEn: "Unsalted Pumpkin Seeds" },
          { name: "حب دوار الشمس مملح", nameEn: "Salted Sunflower Seeds" },
          { name: "حب دوار الشمس مدخن", nameEn: "Smoked Sunflower Seeds" },
          { name: "حب دوار الشمس غير مملح", nameEn: "Unsalted Sunflower Seeds" },
          { name: "حب بطيخ أحمر مملح", nameEn: "Salted Red Watermelon Seeds" },
        ],
      },
      about: {
        title: "قصة الريفية",
        subtitle: "تراث عريق وجودة عصرية",
        description:
          "نحن في الريفية نفخر بكوننا علامة تجارية سعودية راقية متخصصة في إنتاج وتغليف المكسرات المحمصة والمملحة والطبيعية. نجمع بين التقنيات التقليدية العريقة ومعايير الجودة الحديثة لنقدم لكم أجود المكسرات من مصانعنا في مدينة الجبيل الصناعية.",
        values: [
          { title: "جودة عالية", desc: "معايير صارمة في الإنتاج والتغليف" },
          { title: "طبيعي 100%", desc: "مكونات طبيعية بدون إضافات صناعية" },
          { title: "تراث أصيل", desc: "طرق تحميص تقليدية موروثة" },
        ],
      },
      madeInSaudi: {
        title: "صنع في السعودية",
        subtitle: "فخر الإنتاج المحلي",
        description:
          "نعتز بكوننا جزءاً من رؤية المملكة 2030 في دعم الصناعات المحلية وتقديم منتجات سعودية عالية الجودة للعالم",
      },
      testimonials: {
        title: "آراء عملائنا",
        subtitle: "ثقة العملاء هي أساس نجاحنا",
      },
      contact: {
        title: "تواصل معنا",
        subtitle: "نحن هنا لخدمتكم",
        form: {
          name: "الاسم",
          email: "البريد الإلكتروني",
          message: "الرسالة",
          send: "إرسال الرسالة",
        },
        info: {
          phone: "الهاتف",
          email: "البريد الإلكتروني",
          address: "العنوان",
          addressText: "مدينة الجبيل الصناعية، المملكة العربية السعودية",
        },
      },
    },
    en: {
      nav: {
        home: "Home",
        products: "Products",
        about: "About Us",
        contact: "Contact",
      },
      hero: {
        title: "RIFIA",
        subtitle: "Authentic Flavors from the Heart of Saudi Arabia",
        description:
          "Premium natural nuts roasted with exceptional care, from our factories in Jubail Industrial City to your table",
        cta: "Contact via WhatsApp",
        quality: "Premium Quality • 100% Natural • Made in Saudi Arabia",
      },
      products: {
        title: "Our Premium Products",
        subtitle: "A diverse collection of the finest roasted and natural nuts",
        items: [
          { name: "Salted Mixed Nuts", nameEn: "مكسرات مشكلة مملحة" },
          { name: "Grilled Almonds (BBQ Flavor)", nameEn: "لوز مشوي بنكهة الشواء" },
          { name: "Almonds with Cheese", nameEn: "لوز بنكهة الجبنة" },
          { name: "Salted Cashews", nameEn: "كاجو مملح" },
          { name: "Smoked Cashews", nameEn: "كاجو مدخن" },
          { name: "Cashews with Cheese Flavor", nameEn: "كاجو بنكهة الجبنة" },
          { name: "Salted Peanuts", nameEn: "فول سوداني مملح" },
          { name: "Crispy Peanuts with Cheese Flavor", nameEn: "فول سوداني مقرمش بالجبنة" },
          { name: "Crispy Peanuts with Ketchup Flavor", nameEn: "فول سوداني مقرمش بالكاتشب" },
          { name: "Crispy Spicy Peanuts", nameEn: "فول سوداني مقرمش حار" },
          { name: "Chocolate Covered Peanuts", nameEn: "فول سوداني بالشوكولاتة" },
          { name: "Salted Pistachios", nameEn: "فستق مملح" },
          { name: "Grilled Pistachios (BBQ Flavor)", nameEn: "فستق مشوي بنكهة الشواء" },
          { name: "Salted Egyptian Seeds", nameEn: "حب مصري مملح" },
          { name: "Unsalted Egyptian Seeds", nameEn: "حب مصري غير مملح" },
          { name: "Salted Pumpkin Seeds", nameEn: "حب قرع مملح" },
          { name: "Roasted Pumpkin Seeds", nameEn: "حب قرع محمص" },
          { name: "Unsalted Pumpkin Seeds", nameEn: "حب قرع غير مملح" },
          { name: "Salted Sunflower Seeds", nameEn: "حب دوار الشمس مملح" },
          { name: "Smoked Sunflower Seeds", nameEn: "حب دوار الشمس مدخن" },
          { name: "Unsalted Sunflower Seeds", nameEn: "حب دوار الشمس غير مملح" },
          { name: "Salted Red Watermelon Seeds", nameEn: "حب بطيخ أحمر مملح" },
        ],
      },
      about: {
        title: "The RIFIA Story",
        subtitle: "Rich Heritage and Modern Quality",
        description:
          "At RIFIA, we take pride in being a premium Saudi brand specializing in the production and packaging of roasted, salted, and natural nuts. We combine traditional heritage techniques with modern quality standards to deliver the finest nuts from our factories in Jubail Industrial City.",
        values: [
          { title: "Premium Quality", desc: "Strict standards in production and packaging" },
          { title: "100% Natural", desc: "Natural ingredients without artificial additives" },
          { title: "Authentic Heritage", desc: "Traditional roasting methods passed down through generations" },
        ],
      },
      madeInSaudi: {
        title: "Made in Saudi Arabia",
        subtitle: "Pride of Local Production",
        description:
          "We are proud to be part of Saudi Vision 2030 in supporting local industries and delivering high-quality Saudi products to the world",
      },
      testimonials: {
        title: "Customer Reviews",
        subtitle: "Customer trust is the foundation of our success",
      },
      contact: {
        title: "Contact Us",
        subtitle: "We are here to serve you",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          send: "Send Message",
        },
        info: {
          phone: "Phone",
          email: "Email",
          address: "Address",
          addressText: "Jubail Industrial City, Saudi Arabia",
        },
      },
    },
  }

  const t = content[language]

  // Function to get product image
  const getProductImage = (productName: string) => {
    const imageMap: { [key: string]: string } = {
      "مكسرات مشكلة مملحة": "/products/مكسرات-مشكلة.jpeg",
      "Salted Mixed Nuts": "/products/مكسرات-مشكلة.jpeg",
      "لوز مشوي بنكهة الشواء": "/products/لوز-مشوي.jpeg",
      "Grilled Almonds (BBQ Flavor)": "/products/لوز-مشوي.jpeg",
      "لوز بنكهة الجبنة": "/products/لوز-بالجبنة.jpeg",
      "Almonds with Cheese": "/products/لوز-بالجبنة.jpeg",
      "كاجو مملح": "/products/كاجو-مملح.jpeg",
      "Salted Cashews": "/products/كاجو-مملح.jpeg",
      "كاجو مدخن": "/products/كاجو-مدخن.jpeg",
      "Smoked Cashews": "/products/كاجو-مدخن.jpeg",
      "كاجو بنكهة الجبنة": "/products/كاجو-بالجبنة.png",
      "Cashews with Cheese Flavor": "/products/كاجو-بالجبنة.png",
      "فول سوداني مملح": "/products/فول-سوداني-مملح.jpeg",
      "Salted Peanuts": "/products/فول-سوداني-مملح.jpeg",
      "فول سوداني مقرمش بالجبنة": "/products/فول-سوداني-بالجبنة.png",
      "Crispy Peanuts with Cheese Flavor": "/products/فول-سوداني-بالجبنة.png",
      "فول سوداني مقرمش بالكاتشب": "/products/فول-سوداني-بالكاتشب.jpeg",
      "Crispy Peanuts with Ketchup Flavor": "/products/فول-سوداني-بالكاتشب.jpeg",
      "فول سوداني مقرمش حار": "/products/فول-سوداني-بالكاتشب.jpeg",
      "Crispy Spicy Peanuts": "/products/فول-سوداني-بالكاتشب.jpeg",
      "فول سوداني بالشوكولاتة": "/products/فول-سوداني-بالشوكولاتة.jpeg",
      "Chocolate Covered Peanuts": "/products/فول-سوداني-بالشوكولاتة.jpeg",
      "فستق مملح": "/products/فستق-مملح.jpeg",
      "Salted Pistachios": "/products/فستق-مملح.jpeg",
      "فستق مشوي بنكهة الشواء": "/products/فستق-مشوي.jpeg",
      "Grilled Pistachios (BBQ Flavor)": "/products/فستق-مشوي.jpeg",
      // استخدام نفس صورة حب المصري للنوعين
      "حب مصري مملح": "/products/حب-مصري-غير-مملح.png",
      "Salted Egyptian Seeds": "/products/حب-مصري-غير-مملح.png",
      "حب مصري غير مملح": "/products/حب-مصري-غير-مملح.png",
      "Unsalted Egyptian Seeds": "/products/حب-مصري-غير-مملح.png",
      // استخدام نفس صورة حب القرع للثلاثة أنواع
      "حب قرع مملح": "/products/حب-قرع-مملح.webp",
      "Salted Pumpkin Seeds": "/products/حب-قرع-مملح.webp",
      "حب قرع محمص": "/products/حب-قرع-مملح.webp",
      "Roasted Pumpkin Seeds": "/products/حب-قرع-مملح.webp",
      "حب قرع غير مملح": "/products/حب-قرع-مملح.webp",
      "Unsalted Pumpkin Seeds": "/products/حب-قرع-مملح.webp",
      // استخدام نفس صورة حب دوار الشمس للنوعين
      "حب دوار الشمس مملح": "/products/حب-دوار-الشمس-غير-مملح.webp",
      "Salted Sunflower Seeds": "/products/حب-دوار-الشمس-غير-مملح.webp",
      "حب دوار الشمس مدخن": "/products/حب-دوار-الشمس-مدخن.jpeg",
      "Smoked Sunflower Seeds": "/products/حب-دوار-الشمس-مدخن.jpeg",
      "حب دوار الشمس غير مملح": "/products/حب-دوار-الشمس-غير-مملح.webp",
      "Unsalted Sunflower Seeds": "/products/حب-دوار-الشمس-غير-مملح.webp",
      "حب بطيخ أحمر مملح": "/products/حب-بطيخ-احمر.jpeg",
      "Salted Red Watermelon Seeds": "/products/حب-بطيخ-احمر.jpeg",
    }
    return imageMap[productName] || "/placeholder.svg?height=200&width=300"
  }

  return (
    <div className={`min-h-screen bg-white ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image src="/rifia-logo.png" alt="الريفية - RIFIA Logo" width={160} height={50} className="h-12 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              <Link href="#home" className="text-gray-700 hover:text-primary transition-colors">
                {t.nav.home}
              </Link>
              <Link href="#products" className="text-gray-700 hover:text-primary transition-colors">
                {t.nav.products}
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-primary transition-colors">
                {t.nav.about}
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-primary transition-colors">
                {t.nav.contact}
              </Link>
            </div>

            {/* Language Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === "ar" ? "EN" : "عربي"}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-2 pt-4">
                <Link
                  href="#home"
                  className="text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.home}
                </Link>
                <Link
                  href="#products"
                  className="text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.products}
                </Link>
                <Link
                  href="#about"
                  className="text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.about}
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.contact}
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8 items-center min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[800px]">
            <div className="text-center flex flex-col justify-center w-full">
              <div className="mb-6 lg:mb-8 xl:mb-10">
                <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-primary mb-3 lg:mb-4 xl:mb-5 leading-tight">
                  {t.hero.title}
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-700 mb-4 lg:mb-5 xl:mb-6 leading-relaxed">
                  {t.hero.subtitle}
                </h2>
                <p className="text-base sm:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 mb-6 lg:mb-7 xl:mb-8 leading-relaxed max-w-2xl lg:max-w-none">
                  {t.hero.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mb-6 lg:mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-4 xl:py-5 text-base sm:text-lg lg:text-lg xl:text-xl"
                  >
                    <Link href="https://wa.me/966507450163" target="_blank">
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 mr-2" />
                      {t.hero.cta}
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 text-secondary mr-2" />
                    <span>{t.hero.quality}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center w-full">
              <div className="relative w-full h-80 sm:h-96 lg:h-[450px] xl:h-[550px] 2xl:h-[650px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-nuts.jpeg"
                  alt="Premium nuts collection - مجموعة المكسرات المميزة"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white rounded-full p-3 sm:p-4 xl:p-6 shadow-lg">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 xl:w-10 xl:h-10 text-primary" />
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-white rounded-full p-3 sm:p-4 xl:p-6 shadow-lg">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 xl:w-10 xl:h-10 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.products.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.products.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(showAllProducts ? t.products.items : t.products.items.slice(0, 8)).map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-100">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={getProductImage(product.name) || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-primary mb-2 text-lg">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.nameEn}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {!showAllProducts && t.products.items.length > 8 && (
            <div className="text-center mt-8">
              <Button
                onClick={() => setShowAllProducts(true)}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                {language === "ar" ? "عرض المزيد من المنتجات" : "Show More Products"}
              </Button>
            </div>
          )}

          {showAllProducts && (
            <div className="text-center mt-8">
              <Button
                onClick={() => setShowAllProducts(false)}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                {language === "ar" ? "عرض أقل" : "Show Less"}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">{t.about.title}</h2>
              <h3 className="text-xl text-gray-700 mb-6">{t.about.subtitle}</h3>
              <p className="text-gray-600 leading-relaxed mb-8">{t.about.description}</p>

              <div className="grid gap-4">
                {t.about.values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src="/about-nuts.jpeg"
                alt="About RIFIA - عن الريفية"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Made in Saudi Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">{t.madeInSaudi.title}</h2>
            <h3 className="text-xl mb-6 opacity-90">{t.madeInSaudi.subtitle}</h3>
            <p className="text-lg leading-relaxed opacity-90">{t.madeInSaudi.description}</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.testimonials.title}</h2>
            <p className="text-lg text-gray-600">{t.testimonials.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    {language === "ar"
                      ? "منتجات رائعة وجودة عالية، أنصح بها بشدة"
                      : "Amazing products with excellent quality, highly recommended"}
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-semibold">{language === "ar" ? "ع" : "A"}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">
                        {language === "ar" ? "عميل مميز" : "Valued Customer"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.contact.title}</h2>
            <p className="text-lg text-gray-600">{t.contact.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-gray-100">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.name}</label>
                    <Input className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.email}</label>
                    <Input type="email" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.message}</label>
                    <Textarea className="w-full h-32" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">{t.contact.form.send}</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">{t.contact.info.phone}</h4>
                  <p className="text-gray-600" dir="ltr">
                    +966 50 745 0163
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">{t.contact.info.email}</h4>
                  <p className="text-gray-600" dir="ltr">
                    alrifianuts@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">{t.contact.info.address}</h4>
                  <p className="text-gray-600">{t.contact.info.addressText}</p>
                </div>
              </div>

              <div className="pt-6">
                <Button asChild size="lg" className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                  <Link href="https://wa.me/966507450163" target="_blank">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t.hero.cta}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/rifia-logo.png"
                alt="الريفية - RIFIA Logo"
                width={180}
                height={60}
                className="h-14 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-white/80 leading-relaxed">
                {language === "ar"
                  ? "علامة تجارية سعودية راقية متخصصة في إنتاج المكسرات الطبيعية عالية الجودة"
                  : "A premium Saudi brand specializing in high-quality natural nuts production"}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{language === "ar" ? "روابط سريعة" : "Quick Links"}</h4>
              <div className="space-y-2">
                <Link href="#home" className="block text-white/80 hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
                <Link href="#products" className="block text-white/80 hover:text-white transition-colors">
                  {t.nav.products}
                </Link>
                <Link href="#about" className="block text-white/80 hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
                <Link href="#contact" className="block text-white/80 hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{language === "ar" ? "تواصل معنا" : "Contact Us"}</h4>
              <div className="space-y-2 text-white/80">
                <p dir="ltr">+966 50 745 0163</p>
                <p dir="ltr">alrifianuts@gmail.com</p>
                <p>{t.contact.info.addressText}</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="border-t border-white/20 mt-8 pt-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Link
                href="https://linktr.ee/Alrifianuts1"
                target="_blank"
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
                title="Facebook"
              >
                <Facebook className="w-6 h-6 text-white" />
              </Link>
              <Link
                href="https://linktr.ee/Alrifianuts1"
                target="_blank"
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
                title="Instagram"
              >
                <Instagram className="w-6 h-6 text-white" />
              </Link>
              <Link
                href="https://linktr.ee/Alrifianuts1"
                target="_blank"
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
                title="Twitter"
              >
                <Twitter className="w-6 h-6 text-white" />
              </Link>

            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>{language === "ar" ? "© 2024 الريفية. جميع الحقوق محفوظة." : "© 2024 RIFIA. All rights reserved."}</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button asChild size="lg" className="rounded-full w-14 h-14 bg-[#25D366] hover:bg-[#25D366]/90 shadow-lg">
          <Link href="https://wa.me/966507450163" target="_blank">
            <MessageCircle className="w-6 h-6" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
