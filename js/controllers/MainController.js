app.controller('MainController', ['$scope', function($scope) {
    $scope.entries = [
        {
            title: 'Lorem Ipsum',
            image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at dolor ac massa vestibulum auctor quis at leo. Aliquam sit amet est facilisis, ultrices lorem a, feugiat lacus. Pellentesque sagittis aliquet enim in lacinia. Pellentesque tempus ex turpis, et rhoncus lacus tristique vitae. Ut rutrum tortor orci, nec imperdiet nulla ultricies vel. Maecenas tempus iaculis elementum. Duis mattis convallis est at varius.",
            pubdate: new Date('2019', '05', '21'),
            extratext: ''
        },
        {
            title: 'Lorem Ipsum',
            image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at dolor ac massa vestibulum auctor quis at leo. Aliquam sit amet est facilisis, ultrices lorem a, feugiat lacus. Pellentesque sagittis aliquet enim in lacinia. Pellentesque tempus ex turpis, et rhoncus lacus tristique vitae. Ut rutrum tortor orci, nec imperdiet nulla ultricies vel. Maecenas tempus iaculis elementum. Duis mattis convallis est at varius.",
            pubdate: new Date('2019', '03', '08'),
            extratext: ''
        },
        {
            title: 'Lorem Ipsum',
            image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at dolor ac massa vestibulum auctor quis at leo. Aliquam sit amet est facilisis, ultrices lorem a, feugiat lacus. Pellentesque sagittis aliquet enim in lacinia. Pellentesque tempus ex turpis, et rhoncus lacus tristique vitae. Ut rutrum tortor orci, nec imperdiet nulla ultricies vel. Maecenas tempus iaculis elementum. Duis mattis convallis est at varius.",
            pubdate: new Date('2019', '01', '19'),
            extratext: ''
        }
    ]
}]);
