import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Icon name="Music" size={48} className="mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Школа кавказских танцев</h1>
          <p className="text-xl opacity-90">Обучение для детей и взрослых</p>
        </div>
      </header>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Наши направления</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Flame" size={24} className="text-red-600" />
                  Лезгинка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Традиционный танец с огненным характером</p>
                <p className="font-bold text-red-600">3500₽/мес</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Music" size={24} className="text-orange-600" />
                  Барабаны
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Ритмы гор в ваших руках</p>
                <p className="font-bold text-orange-600">3500₽/мес</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Heart" size={24} className="text-red-600" />
                  Свадебная лезгинка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Грациозность и благородство</p>
                <p className="font-bold text-red-600">3500₽/мес</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-amber-50">
        <div className="container mx-auto max-w-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Записаться</h2>
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <Input placeholder="Ваше имя" required />
                <Input placeholder="Телефон" type="tel" required />
                <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
