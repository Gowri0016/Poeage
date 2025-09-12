import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Term() {
  return (
    <>
      <Header />
      <div className="px-6 py-10 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-cyan-800">Terms and Conditions</h1>
        <p className="mb-4">
          In these Terms of Use, any use of the words "you", "your", or similar expressions shall mean any user of this
          website and the app whatsoever. Terms such as "we", "us", "our" or similar expressions shall mean <strong>Poeage Technology Private Limited</strong>.
        </p>

        <p className="mb-4">
          This website, <a href="https://www.poeage.com" className="text-cyan-600 underline">www.poeagetechnology.com</a> (the "Website"), and any mobile application operated by Poeage Technology Private Limited (the "App") are operated by Poeage Technology Private Limited, a company registered under the Companies Act, with its registered office at [Insert Registered Office Address].
        </p>

        <p className="mb-4">
          Please read this page carefully as it sets out the terms that apply to your use of the Website and the App, and any part of their content and all materials appearing on them. By using the Website you confirm that you accept these Terms of Use and you agree to comply with them. If you do not agree to these Terms of Use, please refrain from using the Website and App.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Your Use of the Website if You Are Under 18</h2>
        <p className="mb-4">
          If you are under 18, you may need your parent/guardian to help you with your use of the Website and the App and with reading these Terms and Conditions. If anything is hard to understand, please ask your parent/guardian to explain. If you still have any questions, you or your parent/guardian can contact us at: <strong>[Insert Company Contact Email]</strong>.
        </p>
        <p className="mb-4">
          If you are aged 13 or under, you cannot register for a Poeage Technology account ("Account") without the permission of your parent/guardian. You need to register if you want to use certain services or features. You do not need to register to use the Website or App.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Data & Privacy</h2>
        <p className="mb-4">
          We may collect your personal information when you use the Website and the App. You can find out more about how we use your personal information in our Privacy Policy, which can be accessed here: <strong>[Insert Privacy Policy Link]</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Acceptable Use</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Not to misuse the Website or App in any unlawful manner.</li>
          <li>Not to upload viruses, malware, or harmful code.</li>
          <li>Not to infringe upon or violate our intellectual property rights or the intellectual property rights of others.</li>
          <li>Not to attempt unauthorized access to our systems or data.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">Intellectual Property</h2>
        <p className="mb-4">
          All content, designs, logos, trademarks, and software provided through the Website and App remain the property of Poeage Technology Private Limited or its licensors. You may not reproduce, distribute, or modify any part of the Website or App without prior written permission.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
        <p className="mb-4">
          We make reasonable efforts to ensure that the Website and App are available, accurate, and up-to-date, but we do not guarantee that they will always be available or error-free. To the fullest extent permitted by law, Poeage Technology Private Limited shall not be liable for any damages arising from your use of or inability to use the Website or App.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Changes to These Terms</h2>
        <p className="mb-4">
          We may update these Terms and Conditions from time to time. Any changes will be effective as soon as they are posted on this page. Please review this page regularly to ensure you are aware of any updates.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms and Conditions, please contact us at:
        </p>
        <p className="mb-2 font-medium">Poeage Technology Private Limited</p>
        <p className="mb-1">[36A,Main Road ,Kavundhapadi,Erode]</p>
        <p className="mb-1">Email: <strong>[info@poeage.com]</strong></p>
      </div>
      <Footer />
    </>
  )
}