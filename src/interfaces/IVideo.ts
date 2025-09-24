export interface IVideo {
  success: boolean
  status_code: number
  status_message: string
  id: string
  key: string // YouTube-Key
  name: string
  site: 'YouTube' | 'Vimeo' | string
  type: 'Trailer' | 'Teaser' | 'Clip' | string
  official?: boolean
  published_at?: string
}
