import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WebhookModel } from '../model/webhook.model';

@Injectable()
export class WebhookRepository {
  constructor(
    
    @InjectRepository(WebhookModel)
    private readonly webhookRepository: Repository<WebhookModel>,
    private webhookModelDB: WebhookModel
  ) {}

    public async saveWeatherWebhook(city: string, country: string, webhookURL: string){
      this.webhookModelDB.city = city
      this.webhookModelDB.country = country
      this.webhookModelDB.webhookURL = webhookURL

      const model = await this.webhookRepository.save(this.webhookModelDB)

      return model
    }
}
