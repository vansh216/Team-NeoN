import { ArrowUpRight, CheckCircle, EclipseIcon, PlaneIcon } from 'lucide-react'


const PricingCard = ({
  title,
  description,
  price,
  features,
  cta,
  icon,
}) => {
  return (
    <div className="">
      <div className="rounded-2xl border-1 border-purple-600  ">
        <div className="flex text-shadow-gray-100 gap-4 p-6">
          {icon}
          <div>
            <h3 className="text-xl text-gray-100 font-semibold">{title}</h3>
            <p className="text-gray-100">{description}</p>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-2xl border border-purple-600 p-6">
        <div className="border-b border-b-purple-600 pb-6">
          <p className="mb-6 text-3xl font-bold text-gray-100">
            {price}
            {title === 'Full Access' && (
              <span className="text-base font-medium text-stone-200"> /one-time</span>
            )}
          </p>

          <a
            href="#"
            className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-lg border border-purple-400 bg-transparent px-4 py-2 font-medium text-gray-100 transition duration-300 ease-in-out hover:border-gray-100 hover:text-purple-600"
          >
            {cta}
            <ArrowUpRight className="h-6 w-5" />
          </a>
        </div>
        <ul className="mt-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-100">
              <CheckCircle className="mt-0.5 mr-2 size-5 text-gray-100" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const PricingSection = () => {
  const pricingOptions = [
    {
      title: 'Starter',
      description: 'Perfect for begginers and exploring the languages',
      price: 'Free',
      features: [
        'Access to free peer to peer chats',
        'Basic quizes',
        'Limited updates',
        'Limited Community support',
        'Publicly available events',
      ],
      cta: 'Start Free',
      icon: <PlaneIcon className="h-6 w-6 text-gray-100" />,
    },
    {
      title: 'Full Access',
      description: 'Best for teams and community members',
      price: '$19',
      features: [
        'Peer to peer chats',
        'Peer to Peer video-calling',
        'Full community support',
        'Access all the cultural events',
        'Mocks and quizes for practise',
        'All the updates',
      ],
      cta: 'Choose Premium',
      popular: true,
      icon: <EclipseIcon className="h-6 w-6 text-gray-100" />,
    },
  ]

  return (
    <section id="pricing" className=" py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-100 md:text-4xl">Pricing</h2>
          <p className="mx-auto max-w-2xl text-gray-100">
            Explore faster with our flexible pricing plans for every stage of your exploration & learning.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {pricingOptions.map((option, index) => (
            <PricingCard key={index} {...option} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection