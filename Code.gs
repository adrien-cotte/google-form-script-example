function createMajorityJudgmentForm() {
  // Create a new form and set its title and description
  var form = FormApp.create('Jugement Majoritaire : nom de groupe Griffon 2024');
  form.setDescription('Veuillez noter chaque proposition de 1 (nul) à 5 (top). Un jugement majoritaire permet de dessiner la tendance générale en regardant la médiane de chaque proposition, il n\'est donc pas vraiment possible de manipuler les résultats en mettant volontairement des notes extrêmes. Votez simplement en toute honnêteté :-)');

  // Entire list of choices
  var choices = [
    'Les Griffons Courageux',
    'Les Griffons Amusés',
    'Les Griffons Mystérieux',
    'Les Griffons Vertueux',
    'Les Griffons de Tiroir',
    'Les Gris Foncés / Les Griffons Cés',
    'Les Griffons du Terroir',
    'Les Glorieux Griffons (Les GG)',
    'Les Griffons d\'Or',
    'Les Griffondus',
    'Les Griffons Duski',
    'La Guilde des Griffons Galants',
    'Les Griffons de la Moisson',
    'Les Joyeux Griffons',
    'Les Griffons Champêtres',
    'L\'Auberge du Griffon Gourmand',
    'La Taverne du Griffon Bourré',
    'Le Repos du Griffon',
    'Les Taxes Griffoncières',
    'Les Griffons de Rotrou',
    'Les Griffons du Bouzin',
    'Griffon Le Rotrou',
    'Bouzin Le Griffon',
    'congrégaffiion d\'affinage de Bouzin eul\'Rotrou',
    'Les Griffonets (c\'est des bébés Griffons :3)',
    'La Guilde des Griffons',
    'La Guilde du Griffon',
    'La Guilde des Aventuriers',
    'Les Griffonnés'
  ];

  // Add a scale item for each choice
  choices.forEach(function(choice) {
    form.addScaleItem()
      .setTitle(choice)
      .setBounds(1, 5); // Set the scale from 1 to 5
      // Note: Direct setting of labels for the lowest and highest values via script is not supported in scale items.
  });

  // Log the URL of the form
  Logger.log('Form URL: ' + form.getPublishedUrl());
}
