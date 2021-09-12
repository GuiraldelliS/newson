export const defaultTopics = [
  'Arte',
  'Politica',
  'Tecnologia',
  'Esportes',
  'Ciência',
  'Saúde'
]

export const randomTopic = (): string => {
  return defaultTopics[Math.floor(Math.random() * defaultTopics.length)]
}
