import React from 'react'

const Nosotros = () => {
  return (
    <>
    <main className="container mx-auto">
      <h3 className="text-center text-3xl font-semibold mb-8">Sobre Nosotros</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="sobre-nosotros__imagen">
          <img src="../public/banner.jpeg" alt="imagen nosotros" className="w-full" />
        </div>

        <div className="sobre-nosotros__texto">
          <p className="text-gray-700 mb-4">
            Pellentesque lacus orci, mattis cursus est in, finibus sagittis mi. Sed iaculis elit et porta luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas lacinia est vitae eros posuere, non commodo justo viverra. Sed finibus id elit sit amet egestas. Nullam ac urna odio. Fusce vestibulum venenatis quam in scelerisque. Maecenas ultricies ultricies velit, non suscipit enim. Vivamus massa velit, lobortis fringilla laoreet in, suscipit vitae velit. Etiam at orci euismod magna rhoncus luctus. Curabitur viverra est ut elit gravida rutrum. Nullam eget viverra enim. Quisque vitae varius urna.
          </p>

          <p className="text-gray-700 mb-4">
            Maecenas commodo erat ac elit elementum, ac eleifend arcu gravida. Donec commodo auctor augue, eget tempor dui fermentum in. Duis non enim vitae metus accumsan vehicula. Pellentesque egestas diam ut ante aliquet, sit amet fringilla odio interdum. In nec odio nec turpis faucibus sagittis. Sed quis tellus nec ante luctus aliquam sit amet vel mauris. Nunc vitae facilisis mauris, posuere tristique arcu. Praesent nisi urna, venenatis non laoreet
          </p>
        </div>
      </div>
    </main>
    </>
  )
}

export default Nosotros