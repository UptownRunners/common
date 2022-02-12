package events

import "cloud.google.com/go/pubsub"

type PushRequest struct {
	Message      pubsub.Message
	Subscription string
}
